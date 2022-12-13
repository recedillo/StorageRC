# Import the necessary libraries
import csv
import MySQLdb

# Read the data from the CSV file and store it in a list
data = []
with open('cpeople.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        data.append(row)

# Connect to the MySQL database
db = MySQLdb.connect(host="localhost", user="username", password="password", db="database")

# Create a cursor object to execute SQL queries
cursor = db.cursor()

# Insert the data from the CSV file into the MySQL database
for row in data:
    cursor.execute("INSERT INTO table(column1, column2, column3) VALUES(%s, %s, %s)", (row[0], row[1], row[2]))

# Retrieve the data from the MySQL database and display it on the website
cursor.execute("SELECT * FROM table")
results = cursor.fetchall()

print("<html><body>")
for row in results:
    print("<p>{} {} {}</p>".format(row[0], row[1], row[2]))
print("</body></html>")
