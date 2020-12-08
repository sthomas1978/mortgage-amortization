using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mortgage.amortization.api.Api.Amortization
{
    public interface IMortgageCalculator
    {
        CalculateAmortizationResponse Calculate(CalculateAmortizationRequest request);
    }

    public class MortgateCalculator : IMortgageCalculator
    {
        public CalculateAmortizationResponse Calculate(CalculateAmortizationRequest request)
        {
            var payments = new List<AmortizationLine>() { new AmortizationLine(0, 0, 0, 0, request.Loan) };

            var monthlyRate = (double)request.Rate / 12 / 100d;
            var payment = (double)request.Loan * monthlyRate / (1 - Math.Pow(1 + monthlyRate, (double)-request.Period));

            for (int i = 1; i <= request.Period; i++)
            {
                var previousBalance = payments[i - 1].Balance;
                var interest = previousBalance * (decimal)monthlyRate;
                var principle = (decimal)payment - interest;
                var balance = previousBalance - principle;

                payments.Add(new AmortizationLine(i, (decimal)payment, principle, interest, balance));
            }

            return new CalculateAmortizationResponse
            {
                Loan = request.Loan,
                Period = request.Period,
                Rate = request.Rate,
                Amortization = payments
            };
        }
    }
}
