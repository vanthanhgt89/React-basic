# Function Javascript 
## React khi viết App cần định nghĩa các state ở parent không nên để local trong các component con
## Các component con chỉ thực thi các props thì component cha
## Hàm push() array làm thủ tục không trả về new Array
## Viết ngắn gon Component khi không cần khai báo constructor

```js
  const Todo = (props) => {
    let list = props.todo.map((item, index) => return (<li key={index}> {item}</li>)) 
    return (
      <ul>{list}</ul>
    )
  }


```

## Viết ngắn gon khai báo state trong function
```js
  const Todo = ({todo, onDelete}) => {
    let list = todo.map((item, index) => return (<li key={index}> {item}</li>))
    return(
      <ul>{list}</ul>
    )
  }
```

## required tránh cho input trống khi submit
* Trong JS function được hiểu như một biến có thể gắn trong asyn, callback

```js

const app = require('express')()

function handleRequest(req, res){
    res.end('hello world')
  
  }
// Theo cách này thực thi hàm handleRequest ở trên như một biến tham chiếu trực tiếp
  app.get('/', handleRequest)


// Theo cac này chạy trực tiếp function 
app.get('/', (req, res) => {handleRequest(req, res)})

```