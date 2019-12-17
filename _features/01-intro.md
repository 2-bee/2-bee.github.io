---
id: intro
name: Introduction
---

## Introduction
Reportedly, in recent years there has been a decrease in the number of beehives in the world. However, after a small preliminary analysis we found out that this is not the case. Indeed, beehives are globally increasing!

But, even if bees are not declining on a global scale, they still face many threats and some countries are more affected than others. Threats such as habitat loss, toxic pesticides, parasites, diseases, climate change and invasive species, are still a big problem for bees and, from a broader perspective, for biodiversity.

In this article we present a data-driven analysis of the present and the past of the bees situation, with a focus on their relation with some outer factors related to agriculture.

The reason behind this choice is that bees are not only important for producing honey and other bee products, but they also play an important role in the pollination process which is necessary for the development of crops.

Initially, we are going to show trends in the number of beehives and their correlation with those factors and, to conclude, we will present two kinds of model that we trained, one for beehives number prediction (given other features) and the other for beehives population forecasting.

------

# Where the data comes from?
The dataset we are using is about global food and agriculture statistics and it is provided by the United Nations ([FAOSTAT](http://www.fao.org/faostat/en/#home "FAOSTAT")). It contains data about 200 countries and about nearly 80 categories(crops, forestry, animals, prices etc.), and in particular beehives. 

------

# Beehives, a good indicator?
Obviously the number of beehives is not directly the total number of bees. Nonetheless we assume the numbers to be highly connected and are then a good indicator. 
The reason behind this assumption is that beekeepers build and destroy beehives based on bees population (, it doesn’t make sense to let bees be scattered in too many different beehives.?) 

(@ALEN, DID YOU SAY SOMETHING ELSE ABOUT THIS?) 

------

# Structure of the article
1. *bees distribution*: in this section we are going to explore spatial and temporal distribution of beehives in the world
2. *correlated factors*: in this section we are going to analyse how other factors are correlated to the number of beehives
3. *model prediction*: in this section we present the results of two models which goal is to predict the number of beehives and their population in the future (given the factors above).