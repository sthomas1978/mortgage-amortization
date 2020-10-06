using System.Collections.Generic;

namespace mortgage.amortization.api.Api.Amortization
{
    public class CalculateAmortizationResponse
    {
        public decimal Loan { get; }
        public int Period { get; }
        public decimal Rate { get; }
        IEnumerable<AmortizationLine> Amortization { get; }
    }
}
