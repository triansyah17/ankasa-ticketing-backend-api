CREATE DATABASE ankasa;

CREATE TABLE users (
    id              VARCHAR NOT NULL PRIMARY KEY, 
    name            VARCHAR NULL, 
    email           VARCHAR NULL, 
    password        TEXT NULL, 
    photo           TEXT NULL,
    phone           VARCHAR NULL, 
    city            VARCHAR NULL, 
    address         TEXT NULL, 
    postal_code     VARCHAR NULL, 
    level           INT NULL, 
    is_verified     VARCHAR NULL, 
    created_date    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    token           TEXT NULL
);

CREATE TABLE products (
    id              VARCHAR NOT NULL,
    origin          VARCHAR NULL,
    destination     VARCHAR NULL,
    price           VARCHAR NULL,
    type            VARCHAR NULL,
    stock           INT NULL,
    transit_total   VARCHAR NULL,
    flight_date     DATE NULL,
    airline_id      VARCHAR NULL,
    estimation      VARCHAR NULL,
    created_date    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    code            VARCHAR NULL,
    gate            VARCHAR NULL,
    terminal        VARCHAR NULL
);

CREATE TABLE credit_card (
    id              VARCHAR NOT NULL,
    number          VARCHAR NULL, 
    name            VARCHAR NULL,
    user_id         VARCHAR NULL
);

CREATE TABLE destinations (
    id              VARCHAR NOT NULL, 
    country         VARCHAR NULL, 
    place           VARCHAR NULL, 
    image           TEXT NULL, 
    price           VARCHAR NULL, 
    total_airline   VARCHAR NULL, 
    date            DATE NULL
);

CREATE TABLE transactions (
    id              VARCHAR NOT NULL, 
    is_paid         VARCHAR NULL, 
    user_id         VARCHAR NULL, 
    seat            VARCHAR NULL, 
    total_order     VARCHAR NULL, 
    passenger_name  VARCHAR NULL, 
    passenger_phone VARCHAR NULL,
    product_id      VARCHAR NULL, 
    airline_id      VARCHAR NULL
);

CREATE TABLE airlines (
    id               VARCHAR NOT NULL,
    photo            TEXT NULL, 
    name             VARCHAR NULL, 
    pic              VARCHAR NULL, 
    phone            VARCHAR NULL,      
    created_date      TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,  
    is_active        VARCHAR NULL
);