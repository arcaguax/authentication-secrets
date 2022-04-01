# Authentication & Security Practice

  live deployment: 

  Practicing the fundamental techniques used for securing and authentication software. Here we use 'levels' to denote which practice is more secure. You can view different level implementations via the commit history. Note that we start at level 2 with the initial commit.


## Levels of Security: 

### Level 1: Usernames and passwords
  
  Tracks a user by storing a submitted username and user password into a database. When login is attempted, server can then search database for submitted user to check for a password match.
 
### Level 2: Database Encryption and env files

  Encrypting takes a given value and encodes the value so that it appears to be something different. The original value can be decoded or reconverted from the new value by using an encryption key.
  
  Env files store environment variables that are to be accessed from a piece of software. In the context of a database, the env variables are often the authentication information that is to be used for accessing the server itself. In this respect, it is important these variables remain secret from non-authorized users but remain accessible to the underlying software environment.

  uses: dotenv and mongoose-encryption

### Level 3: Hashing Passwords

  What is Hashing? A function that uses a mathematical algorithm to generate a new value from the given value. The original value cannot be retrieved or decoded from the new hash value.

  uses: md5 hashing

### Level 4: Salting and Hashing Passwords

  Takes Hashing one step further by concatenating a random value (a salt) to a user’s given password. This additional salt is stored by the server and remains unknown to a user. Salt increases the difficulty of cracking a user’s password by increasing the length and complexity of said password.

  Salt Rounds - Additional security can be implement via the method of continuous salting. Take a password + salt and sending it to the hash function is 1 salt round.  Taking that password, which is the result of the hash function, adding salt to it and sending it to the hash function is 2 salt rounds. This process can occur as many times specified.

  uses: bcrypt hashing

### Level 5: Cookies and Sessions

  Browser saves information about what is viewed when user visits a website. Thus user may register/login to the page. The browser will authenticate the user against the servers stored information. Once auth is complete the server the user may choose to navigate away from the page without worry of having to relogin. This is possible beause the browser saves the information that the user is already authenicated for that session.

  uses: passport passport-local passport-local-mongoose express-session 

### Level 6: OAuth 2.0

### Tech Stack:

MERN w/ mongoose.

