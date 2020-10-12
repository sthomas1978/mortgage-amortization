using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace mortgage.amortization.api.Api.Amortization
{
    public class CalculateAmortizationRequest
    {
        [JsonPropertyName("loan")]
        public decimal Loan { get; set; }
        [JsonPropertyName("period")]
        public decimal Period { get; set; }
        [JsonPropertyName("rate")]
        public decimal Rate { get; set; }
    }
}
