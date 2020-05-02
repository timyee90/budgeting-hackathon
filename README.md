# 2cents Budgeting Application


Simply put in a spreadsheet, hit submit and see your personal finances in chart and tabular form. Please ensure the .csv file contains the following columns:

1. Date
2. Description
3. Amount
4. Transaction_Type
5. Category
6. Account_Name


## Getting Started


1. Run the following commands in your terminal to install dependencies:

```
npm install
```

2. In two separate terminals, running the following commands will build the necessary files and serve the proper directory to your localhost:4000, respectively:

```
npm run build-dev
```

```
npm run server-dev
```


3. Install MySQL 5.7 [here](dev.mysql.com/downloads/mysql/5.7.html#downloads)

4. Run the following commands in a separate terminal; make sure to put in your mysql password:

```
mysql -u root -p < database/schema.sql
```

5. Finally type the following into your web browser address bar: 

```
localhost:4000
```

## Credits


Oliver Comia, Maxwell Katz, Tim Yee
