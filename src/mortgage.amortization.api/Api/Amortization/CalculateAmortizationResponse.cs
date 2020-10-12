using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace mortgage.amortization.api.Api.Amortization
{
    public class CalculateAmortizationResponse
    {
        [JsonPropertyName("loan")]
        public decimal Loan { get; set; }
        [JsonPropertyName("period")]
        public decimal Period { get; set; }
        [JsonPropertyName("rate")]
        public decimal Rate { get; set; }
        [JsonPropertyName("amortization")]
        public IEnumerable<AmortizationLine> Amortization { get; set; }
    }
}
