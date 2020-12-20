using System.Threading.Tasks;

namespace Mortgage.Api.Amortization
{
    public interface IAmortizationHandler
    {
        Task<CalculateAmortizationResponse> Calculate(CalculateAmortizationRequest request);
    }

    public class AmortizationHandler : IAmortizationHandler
    {
        private readonly IMortgageCalculator _calculator;

        public AmortizationHandler(IMortgageCalculator calculator)
        {
            _calculator = calculator;
        }

        public async Task<CalculateAmortizationResponse> Calculate(CalculateAmortizationRequest request)
        {
            return await Task.FromResult(_calculator.Calculate(request));
        }
    }
}
