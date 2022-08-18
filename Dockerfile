FROM reactnativecommunity/react-native-android:latest
# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
# RUN apt update  && apt-get install  openjdk-11-jdk -y
# RUN apt-get update && \
#     apt-get install -y openjdk-11-jdk ca-certificates-java && \
#     apt-get clean && \
#     update-ca-certificates -f
# RUN npm install jdk11
# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
# RUN apt update  && apt-get install  openjdk-11-jdk -y
WORKDIR /reactnative-app
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN apt update  && apt-get install  openjdk-11-jdk -y
RUN mkdir -p ./src
WORKDIR /reactnative-app/src
COPY TestApp/package*.json .
COPY TestApp/*.js .
RUN npm install
RUN pwd
RUN ls -la 
RUN mkdir -p ./Test
WORKDIR /reactnative-app/src/Test
COPY TestApp/Test ./
RUN mkdir -p ./android
WORKDIR /reactnative-app/src/android
COPY TestApp/android ./
RUN ./gradlew assembleDebug
WORKDIR /reactnative-app
COPY server.js ./
RUN npm install express 
RUN ls -la 
EXPOSE 8081
CMD ["node", "server.js"]




# FROM reactnativecommunity/react-native-android:2.1
# WORKDIR /reactnative-app
# RUN mkdir -p ./src
# WORKDIR /reactnative-app/src
# COPY TestApp/package*.json .
# COPY TestApp/*.js .
# RUN npm install
# RUN pwd
# RUN ls -la 
# RUN mkdir -p ./Test
# WORKDIR /reactnative-app/src/Test
# COPY TestApp/Test ./
# WORKDIR /reactnative-app/src
# RUN mkdir -p ./web
# WORKDIR /reactnative-app/src/web
# COPY TestApp/web ./
# # RUN cd web 
# RUN npm install
# RUN rm Test 
# RUN ln -s /reactnative-app/src/Test
# RUN pwd
# RUN ls -la  
# RUN npm run build 
# WORKDIR /reactnative-app
# COPY server.js ./
# RUN npm install express 
# RUN ls -la 
# EXPOSE 8081
# CMD ["node", "server.js"]




