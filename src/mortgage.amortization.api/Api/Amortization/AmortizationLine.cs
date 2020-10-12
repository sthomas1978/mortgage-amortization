﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace mortgage.amortization.api.Api.Amortization
{
    public class AmortizationLine
    {
        [JsonPropertyName("period")]
        public int Period { get; }
        [JsonPropertyName("payment")]
        public decimal Payment { get; }
        [JsonPropertyName("principal")]
        public decimal Principal { get; }
        [JsonPropertyName("interest")]
        public decimal Interest { get; }
        [JsonPropertyName("balance")]
        public decimal Balance { get; }

        public AmortizationLine(
            int period,
            decimal payment,
            decimal principal,
            decimal interest,
            decimal balance)
        {
            Period = period;
            Payment = payment;
            Principal = principal;
            Interest = interest;
            Balance = balance;
        }
    }
}
