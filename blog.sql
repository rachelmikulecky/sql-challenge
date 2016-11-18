DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;

\c blog;

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content TEXT
);

INSERT INTO posts (title, content)
  VALUES ('Why is Wuthering Heights so important?', 'Wuthering Heights, written by Emily Bronte in 1847, has undeniably been considered a classic novel to society after its initial poor reception. Considered to be a darker rendition of life at its core, Wuthering Heights is the story of the dark passion of love, and the countless emotions that arise from its denial. Written in a poetic, symbolical prose, the intelligence and skill of the author is very apparent and undoubtedly one of the reasons the book is considered so important.

But, as a fair amount of books are also similarly well written, Brontes work is considered so astounding for reasons beyond the narrative. A novel novel, this book marked the characteristics of multiple eras, setting the tone for future novelists and authors. Situated between the Romantic [/Gothic] Era and the Victorian Era this work held characteristics of both married perfectly together in a deliberate and calculated story that wonderfully captures what it means to be human. Like a Victorian novel the book focuses on the very distinct social classes and how society affects our lives and decisions. It also highlighted how the purity of love can improve difficult lives. Similar to a Romantic-Gothic novel the characters are egotistical and tyrannical, with the only redeeming qualities they possess being their ability to love so deeply. Along with the dark setting haunted by ghosts, madness, and death, this love story is so unexpected and unique that its hard not to applaud Emily for her carefully crafted tale.

Another reason this narrative is so widely appreciated is that the characters are so very real. The time period this story takes place in has all but disappeared, but the characters have not, because even a century and a half later people are still the same. Their emotions are just as relatable, their motives just as understandable, and while their actions are not the most logical they are not entirely unreasonable. Wuthering Heights is not just a saccharine romance novel. it is a exhibition of life, an essay on love, and a meaningful glance at relationships.');
