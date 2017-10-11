# Thành phần và kế thừa
* React có một mô hình thành phần mạnh mẽ, và chúng tôi khuyên bạn nên sử dụng các thành phân thay vì kế thừa để tái sử dụng lại mã giữa các thành phần.
* Trong phần này, chúng ta sẽ xem xét một vài vấn đề nơi mà các nhà phát triển mới thường trải qua thừa kế, và chỉ ra cách chúng ta giải quyết chúng bằng thành phần
# Ngăn chặn
* Một vài thành phần không biết được con của chúng ở thời điểm trước. Đây là đặc biệt chung của thành phần như thanh SideBar hay Dialog nó đại diện cho các hộp chung
* Chúng tôi khuyên cáo rằng các thành phần như vậy sử dụng props đặc biệt là children để vươt qua các thành phần con đầu ra của họ
```js
  function FancyBorder(props){
    return(
      <div className={'FancyBorder' + props.color}>
        {props.children}
      </div>
    )
  }

```

* Điều này cho phép các component khác lấy ra các con của chúng làm tổ JSX

```js
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

```

* Tất cả mọi thứ bên trong <FrancyBorder> thẻ JSX được chuyển vào thành phân FancyBorder dưới dạng children. Khi mà FancyBorder tạo ra {props.children} bên trong thẻ <div> các phần tử xuất hiện trong đầu ra cuối cùng 

* Trong khi điều này ít phổ biến hơn, đôi khi bạn có thể muốn 'lỗ hổng' trong một component. Trong trường hợp này bạn có thể đưa ra các qui ước riêng của bạn thay vì sử dụng children

```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}


```
# Chuyên nghành
* Đôi khi chúng ta nghĩ các component như là trường hợp đặc biệt của một component khác.Trong ví dụ, chúng tôi có thể nói thành phần WelcomeDialog là một trường hợp đặc biệt của Dialog.
* Trong React, điều này cũng đạt được bởi thành phần, nơi mà một thành phần 'cụ thể' trình bày một thành phần 'chung' và cấu hình với props
```js
  function Dialog(props){
    return (
      <FancyBorder color="blue">
        <h1>{props.title}</h1>
        <p className="Dialog-message">
         {props.message}
        </p>
      </FancyBorder>
    )
  }

  function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}

```

* Thành phần làm việc tốt bằng các components được định nghĩa như các lớp
```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

```

# Vì thế, những gì về kế thừa
* Tại FaceBook, chúng tôi sử dụng React trong 1000 thành phần và chúng tôi không thấy bấy kỳ trường hợp nào sử dụng  mà chúng tôi khuyên bạn nên tạo phân cấp kế thừa thành phầnphần
* Props và compostion mang đến cho bạn tất cả sự mềm dẻo khi bạn cần tuỳ chình  giao diện và hành vi của một component một cách rõ ràng và an toàn. Lưu ý rằng các thành phần có thể chấp nhận các props độc lập, bao gồm giá trị nguyên thuỷ, các phần tử React hoặc chức năng
* Nếu bạn muốn tái sử dụngdụng non-Ui chức năng giữa các components, chúng tôi đề nghị phân chia chúng vào một module Js tách rời. Các components này có thể import and sử dụng các chức năng, đối tượng, hoặc một class không có mở rộng nó.