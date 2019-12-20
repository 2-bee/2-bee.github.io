---
id: predictions
name: Predictions
---

## Predictions
What will the future trend of beehives be like? We analyzed the dataset so far and noticed a steady increase since 1960. The future could look similar. We used the whole time series to <span style="background-color: #c4e9f3">predict the future</span> of beehives until 2030 and see it will be increasing even more. But the future is not set in stone. We saw a massive decrease of beehives in Europe and in the US between 1990 and 2000. This can happen anywhere and at any time. A lot of <span style="background-color: #c4e9f3">unpredictable factors and uncertainties</span> influence beehive colonies. 

For predicting the future we use Auto Regressive Integrated Moving Average ([ARIMA](https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average "ARIMA")) and evaluate first using the original data for the range of 2010 until 2017. This is how our evaluation looks like. Quite similar, right? 

<img src="../plots/beehives_arima_evaluation.png" alt="Arima Prediction" title="Beehives Future Prediction&quot; " style="border-radius:0" />

Let us now move further and predict the value until 2030. 

<img src="../plots/beehives_arima.png" alt="Arima Prediction" title="Beehives Future Prediction&quot; " style="border-radius:0" />

This is giving us a positive outlook for the future of bees.
