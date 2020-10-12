using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mortgage.amortization.api.Api.Amortization
{
    [Route("api/[controller]")]
    [ApiController]
    public class AmortizationController : ControllerBase
    {
        private readonly IAmortizationHandler _handler;

        public AmortizationController(
            IAmortizationHandler handler)
        {
            _handler = handler;
        }

        [HttpPost]
        public async Task<CalculateAmortizationResponse> Calculate(CalculateAmortizationRequest request)
        {
            return await _handler.Calculate(request);
        }

        [HttpGet]
        public async Task<string> Get()
        {
            return await Task.FromResult("hello");
        }
    }
}