---
id: analysis
name: Analysis
---

## Analysis

# How are the beehives distributed?
The number of beehives in the world is not equally distributed and is not constant over time. We explore the change in the world, continents and certain countries. To start with, we introduce the world beehives population trend in an <span style="background-color: #ded1cf">interactive graph</span>.


{% include world_beehives.html %}

We can see that the number of beehives is actually increasing in the world, in fact the total number of beehives <span style="background-color: #ded1cf">increased 185.06% over the last 56 Years!</span>
But there could still be some differences between continents. Let’s look at this. 

{% include stacked.html %}

Not only we see a huge increase on the asian and african continent, we see a massive drop in Europe and America. America recovered but Europe still suffers in order to increase their population.

------

We picked some of the most interesting countries, in particular the ones with high increase or decrease in the number of beehives. The graph shows the __percentage changes__ between the two picked year at the bottom. This graph is __interactive__ as well, so feel free to __explore!__

{% include inc_dec.html %}

------

### **Around the world**
How beehives are distributed in the world, which countries are the best when it comes to beehives? 
Below we present the top 10 countries, both for number of beehives and for the ratio (number of beehives in country / total surface area of country). For easier comparison the values are normalized a scale between 0 and 1. 

{% include top10.html %}



The _interactive_ plot above is showing insights into the countries with the biggest beehives population. We see that most of these countries are big in terms of size like India, China, Russia, and America. This is not a huge surprise since they have a lot of agricultural areas that bees can exploit.  Although it is important to look at top ten by beehives number, we don't believe this is a fair competition for smaller countries, this is why we will show the top ten by density - just press the button in the graphic! Do you see how the plot is changing? 
We clearly see a shift towards smaller countries, only Turkey preserves its spot in the top ten and Korea made it to the podium! 

------

{% include interactive_map.html %}

In the world map, we added three different configurations for you to explore. There is first the total number of beehives which is dominated by large countries, second the beehives divided by the number of habitants, and then the density of beehives.

------

### **But, what factors influence beehives?**
We took into consideration some of the available categories in the dataset, mainly related to crops, and for each one we analysed the correlation with beehives. 
We are presenting below the obtained results and providing some explanation of why these factors could be correlated.

Around <span style="background-color: #c4e9f3">80% of the flowering plants</span> depend upon bees for pollination. Pollination is crucial because many of our vegetables, fruits and the crops that feed our livestock rely on it to be fertilised. Vegetables such as broccoli, asparagus and cucumber rely on the pollination of bees, as do apricots, strawberries, apples, tomatoes and almonds. In the following two graphs we are showing the correlations between certain crops production and number of beehives for the whole World. On the <span style="background-color: #c4e9f3">left graph we can see correlations with some of the crops that we picked</span>. Our decision on picking crops was based on what people said it is important for the bees, but only if there enough data for those. You can see that most of the crops are positively correlated and a few negatively. The reader has to understand that the correlations can be tricky and don't necessarily always explain what is happening in the real world and these doesn't mean that more beehives with yield in less crops production. Because the real World is a very complex system there could be some other causations which is hard to understand. <span style="background-color: #c4e9f3">The boxplot on the right is computed for all of the crops production yields</span> that our data provides us which is around 150 different species. This one shows us a more general picture and tells us that there is on average a very high correlation between the two.

<iframe src="{{ site.baseurl }}/../../plots/selected_Correlation.html" frameborder="0" allowfullscreen="false" style='width:70%; height:600px;display:inline' scrolling="no"></iframe><iframe src="{{ site.baseurl }}/../../plots/boxplot.html" frameborder="0" allowfullscreen="false" style='width:28%; height:600px; display:inline' scrolling="no"></iframe>
