---
id: intro
name: Introduction
---

## Introduction
Do you think bees are dying out everywhere in the world? 

Well, even though everyone is talking about bee population __declining__, this is only partially true and actually far from true if looking at the global situation. Reportedly, in recent years there has been a decrease in the number of beehives in the world. However, after a preliminary analysis, we found out that this is not the case. Indeed, beehives are globally __increasing__! We will look into this phenomena more closely. 

But, even if bees are not declining on a global scale, they still face many __threats__ and some countries are more affected than others. Threats such as habitat loss, toxic pesticides, parasites, diseases, climate change, and invasive species, are still a big problem for bees and, from a broader perspective, for biodiversity.


In this article, we present a data-driven analysis of the present and the past of the bees situation, with a focus on their relation with some outer factors related to __agriculture__.

The reason behind this choice is that bees are not only important for producing honey and other bee products, but they also play a crucial role in the __pollination__ process which is necessary for the development of crops.

At the beginning, we will introduce trends for the total beehives number and their correlation with factors and, to conclude, we will present two kinds of __prediction__ models that we trained, one for predicting the number of beehives given the amount of crops production and country size and the other for beehives population forecasting.

# Where does the data come from?
The dataset we are using is about global food and agriculture statistics and it is provided by the United Nations ([FAOSTAT](http://www.fao.org/faostat/en/#home "FAOSTAT")). It contains various agricultural data for 200 countries and about nearly 80 categories(crops, forestry, animals, prices, etc.), and most importantly beehives. An important thing to mention is that this data contains only the honey bee species that are kept by beekepers and doesn't include all the wild bee species that are present all over the World.


# Beehives, a good indicator?
Obviously the number of beehives is not the same as the total number of bees. Nonetheless we assume the numbers to be highly correlated and that beehives is a good indicator of the bee population. Of course, it would be nearly impossible to count all the bees, so the experts usually talk about _bee colonies_ instead which coresponds to beehives and bee nests. The assumption we make is that beekepers remove beehives that don't have any bees inside and that those are not included in the count.

------

# Structure of the article
1. *bees distribution*: in this section we are going to explore spatial and temporal distribution of beehives in the world
2. *correlated factors*: in this section we are going to analyse how other factors are correlated to the number of beehives
3. *model prediction*: in this section we present the results of two models which goal is to predict the number of beehives and their population in the future (given the factors above).
