FROM postgres:12.9

COPY ./data/tnff_films.csv /data/
ADD create_schema.sql /docker-entrypoint-initdb.d
ADD seed_data.sql /docker-entrypoint-initdb.d
