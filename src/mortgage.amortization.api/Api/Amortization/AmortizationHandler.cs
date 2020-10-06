using System.Threading.Tasks;

namespace mortgage.amortization.api.Api.Amortization
{
    public interface IAmortizationHandler
    {
        Task<CalculateAmortizationResponse> Calculate(CalculateAmortizationRequest request);
    }

    public class AmortizationHandler : IAmortizationHandler
    {
        public async Task<CalculateAmortizationResponse> Calculate(CalculateAmortizationRequest request)
        {
            return await Task.FromResult(new CalculateAmortizationResponse());
        }
    }
}
