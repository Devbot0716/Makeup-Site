CREATE TABLE photos (
  images varchar(255), --varchar is for strings
  type varchar(255),
  description varchar(255),
  name varchar(255),
  price varchar(255),
  id SERIAL PRIMARY KEY
)

INSERT INTO photos (images, type, description, name, price)
VALUES
  ('./images/beforeafter1.jpg', 'beforeafter', '', '', ''),
  ('./images/beforeafter2.jpg', 'beforeafter', '', '', ''),
  ('./images/beforeafter3.jpg', 'beforeafter', '', '', ''),
  ('./images/beforeafter4.jpg', 'beforeafter', '', '', ''),
  ('./images/beforeafter5.jpg', 'beforeafter', '', '', ''),
  ('./images/beforeafter6.jpg', 'beforeafter', '', '', ''),

  ('./images/brows1.jpg', 'brows', '', '', ''),
  ('./images/brows2.jpg', 'brows', '', '', ''),
  ('./images/brows3.jpg', 'brows', '', '', ''),
  ('./images/brows4.jpg', 'brows', '', '', ''),
  ('./images/brows5.jpg', 'brows', '', '', ''),

  ('./images/hair1.JPG', 'hair', '', '', ''),
  ('./images/hair2.JPG', 'hair', '', '', ''),
  ('./images/hair3.JPG', 'hair', '', '', ''),
  ('./images/hair4.jpg', 'hair', '', '', ''),

  ('./images/makeup1.JPG', 'makeup', '', '', ''),
  ('./images/makeup2.JPG', 'makeup', '', '', ''),
  ('./images/makeup3.jpg', 'makeup', '', '', ''),
  ('./images/makeup4.jpg', 'makeup', '', '', ''),
  ('./images/makeup5.jpg', 'makeup', '', '', '')
