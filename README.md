# library-app

```npx create-react-app react-library --template typescript```

```npm install react-router-dom@5```

```npm install --save @types/react-router-dom```

```npm install @okta/okta-signin-widget@6.3.3```

```npm install @okta/okta-react@6.4.3```

https://github.com/darbyluv2code/fullstack-react-and-springboot.git

## application.properties format

```
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/reactlibrarydatabase?useSSL=false&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

spring.data.rest.base-path=/api

okta.oauth2.client-id=
okta.oauth2.issuer=https://{path}/oauth2/default

#####
#
# HTTPS configuration
#
#####
# Server web port
server.port=8443
# Enable HTTPS support (only accept HTTPS requests)
server.ssl.enabled=true
# Alias that identifies the key in the key store
server.ssl.key-alias=luv2code
# Keystore location
server.ssl.key-store=classpath:luv2code-keystore.p12
# Keystore password
server.ssl.key-store-password=secret
# Keystore format
server.ssl.key-store-type=PKCS12
```
