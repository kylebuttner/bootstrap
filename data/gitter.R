#import packages
install.packages('jsonlite')
library(jsonlite)

install.packages('plyr')
library(plyr)

gitter <- fromJSON('https://api.gitter.im/v1/rooms/5544bb8e15522ed4b3dfd511/chatMessages?limit=1000&access_token=fbc5ffbc062fc47817ed0156c13b99f90eaac1b6')

#chattiest
