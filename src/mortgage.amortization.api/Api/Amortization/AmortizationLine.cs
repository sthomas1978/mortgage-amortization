using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mortgage.amortization.api.Api.Amortization
{
    public class AmortizationLine
    {
        public int Period { get; }
        public decimal Payment { get; }
        public decimal Principal { get; }
        public decimal Interest { get; }
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
