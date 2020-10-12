using mortgage.amortization.api.Api.Amortization;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mortgate.amortization.api.tests.Api.Amortization
{
    public class MockAmortizationHandler : IAmortizationHandler
    {
        public async Task<CalculateAmortizationResponse> Calculate(CalculateAmortizationRequest request)
        {
            return await Task.FromResult(new CalculateAmortizationResponse()
            {
                Loan = request.Loan,
                Period = request.Period,
                Rate = request.Rate,
                Amortization = new List<AmortizationLine>()
            });
        }
    }
}
