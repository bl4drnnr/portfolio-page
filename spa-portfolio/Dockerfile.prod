FROM node as spa-build
WORKDIR /spa-portfolio
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
COPY --from=spa-build /spa-portfolio/build /usr/share/nginx/html
