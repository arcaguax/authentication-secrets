# Security Practice

live deployment: 

Practicing of Authentication & Security. 

## Levels of Security: 

### Level 1: Usernames and passwords
 
### Level 2: Database Encryption and env files

  Encrypting takes a given value and encodes the value so that it appears to be something different. The original value can be decoded or reconverted from the new value by using an encryption key.
  
  Env files store environment variables that are to be accessed from a piece of software. In the context of a database, the env variables are often the authentication information that is to be used for accessing the server itself. In this respect, it is important these variables remain secret from non-authorized users but remain accessible to the underlying software environment.

### Level 3: Hashing Passwords

  What is Hashing? A function that uses a mathematical algorithm to generate a new value from the given value. The original value cannot be retrieved or decoded from the new hash value.

### Level 4: Salting and Hashing Passwords

   Takes Hashing one step further by concatenating a random value (a salt) to a user’s given password. This additional salt is stored by the server and remains unknown to a user. Salt increases the difficulty of cracking a user’s password by increasing the length and complexity of said password.

   Salt Rounds - Additional security can be implement via the method of continuous salting. Take a password + salt and sending it to the hash function is 1 salt round.  Taking that password, which is the result of the hash function, adding salt to it and sending it to the hash function is 2 salt rounds. This process can occur as many times specified.

### Level 5: Cookies and Sessions

### Level 6: OAuth 2.0

### Tech Stack:

MERN w/ mongoose.

