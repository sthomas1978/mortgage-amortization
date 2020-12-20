using System.Text.Json.Serialization;

namespace Mortgage.Api.Amortization
{
    public class CalculateAmortizationRequest
    {
        [JsonPropertyName("loan")]
        public decimal Loan { get; set; }
        [JsonPropertyName("period")]
        public int Period { get; set; }
        [JsonPropertyName("rate")]
        public decimal Rate { get; set; }
    }
}
