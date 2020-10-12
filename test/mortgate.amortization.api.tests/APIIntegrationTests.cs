using Microsoft.AspNetCore.Hosting;
using PactNet;
using PactNet.Infrastructure.Outputters;
using System.Collections.Generic;
using System.Net;
using Xunit;
using Xunit.Abstractions;

namespace mortgate.amortization.api.tests
{
    public class APIIntegrationTests
    {
        private readonly IWebHost _testServer;
        private readonly ITestOutputHelper _output;

        public APIIntegrationTests(ITestOutputHelper output)
        {
            _output = output;

            _testServer = new WebHostBuilder()
                .UseEnvironment("Development")
                .UseUrls("http://localhost:5000")
                .UseKestrel(options => options.Listen(IPAddress.Any, 5000))
                .UseStartup<MockStartup>()
                .Start();
              
        }

        [Fact]
        public void EnsureAmortizationApiHonorsPactWithConsumer()
        {
            // Arrange
            var config = new PactVerifierConfig
            {
                Outputters = new List<IOutput>
                {
                    new XUnitOutput(_output)
                },
                Verbose = true
            };

            // Act, Assert
            var pactVerifier = new PactVerifier(config);

            pactVerifier
                .ServiceProvider("Mortgage API", "http://localhost:5000")
                .HonoursPactWith("Mortgage UI")
                .PactUri(@"C:\repos\mortgage-amortization\src\mortgage.amortization.ui\pacts\mortgage_ui-mortgage_api.json")
                .Verify();
        }
    }

    public class XUnitOutput : IOutput
    {
        private readonly ITestOutputHelper _output;

        public XUnitOutput(ITestOutputHelper output)
        {
            _output = output;
        }

        public void WriteLine(string line)
        {
            _output.WriteLine(line);
        }
    }
}
