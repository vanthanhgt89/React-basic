# Suy nghĩ về phản hồi [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
* quan điểm của chúng ta, Phản hồi là cách tốt nhất khi xây dựng ứng dụng Wed lớn và tốc độ với JS. Nó đã được thu nhỏ thể rất tốt cho chúng ta như Facebook và Insagram.
* Một trong rất nhiều phần tuyệt vời của React là cách nó làm cho chúng ta nghĩ về ứng dụng chúng ta xây dựng. Trong tài liệu này, chúng tôi sẽ hướng dẫn bạn quá trình suy nghĩ về việc xây dựng chương trình tìm kiếm dữ liệu sản phẩm bằng React.
# Bắt đầu với mock up 
  * Ý tưởng là chúng ta đã có một JSON API và giao diện từ thiết kế của chúng ta. Thiết kế trong như sau:

  * JSON API trả về dữ liệu như sau:
  ```json
{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}


  ```
  # Bước 1: Chia giao diện người dùng thành các component phân cấp
  * Điều đầu tiên bạn muốn làm là vẽ một hộp bao quanh mỗi component (và subComponent) trong mô hình giả mock và đặt tên cho chúng. Nếu bạn làm việc với nhà thiết kế, hị có thể đã hoàn thành điều này, vậy hãy nói chuyện với họ. Tên lớp Photoshop của họ có thể kết thúc bằng tên của các React ComponentComponent
  * Nhưng làm thế nào bạn biết những component riêng của mình? Chỉ sử dụng kỹ thuật giống nhau cho các quyết định xem bạn nên tạo một hàm hay một đối tượng. Một kỹ thuật như thế là  nguyên tắc trách nhiệm duy nhất, nó là, một component nên định nghĩa chỉ làm 1 việc. Nếu nó kết thúc lên, nó phải được phân huỷ thành các subcomponent nhỏ hơn
  * Lúc này chúng ta đã thường  hiển thị một mô hình dữ liệu JSON với người dùng, bạn sẽ tìm nó nếu mo hình của bạn được xây dựng chính xác, Giao diện của bạn (và do đó các cấu trúc component) se bản đồ độc đáo. Đó là bởi vì giao diện người dùng và các mô hình dữ liệu có xu hướng tuân theo một kiến trúc thông tin giống nhau, nó có ý nghĩa công việc tách giao điẹn người dùng của bạn thành các thanh phần thường là tầm thường. Chỉ cần chia nhỏ nó trong các components đại diện cho chính xác một mô hình dữ liệu của bạn.
  ![]('./img.png')

  * Bạn sẽ thấy ở đây chúng tôi có 5 components trong ứng dụng đơn giản của chúng tôi. Chúng tôi đã in nghiêng các dữ liệu mà mỗi component đại diệndiện
    1. FilterableProductTable(màu cam): chứa toàn bộ ví dụ
    2. SearchBar(màu xanh lục): nhận toàn bộ đầu vào người dùng 
    3. ProductTable(màu xanh lá cây): hiển thị và lọc bộ sưu tập dữ liệu dựa trên người dùng nhập vào
    4. ProductCategoryRow(Màu ngọc lam): hiển thị tiêu đề mỗi danh mục
    5. ProductRow(màu đỏ): hiển thị từng hàng cho mỗi sản phẩm
  * Nếu bạn nhìn vào ProductTable, bạn sẽ thấy tiêu đề bảng (có chứa nhãn tên và giá) không phải là thành phần của chính nó. Nó là vấn đề ưu tiên, và có một lập luận thực hiện theo các này. Đối với ví dụ này, chúng ta bỏ qua nó như một thành phần của ProductTable bởi vì nó như là một phần tạo ra bộ sưu tập dữ liệu mà là trách nhiệm của ProductTable. Tuy nhiên, nếu tiêu đề trở lên phức tạp (nếu chúng ta đã tạo thêm khả năng sắp xếp). Nó sẽ có ý nghĩa để làm ProductTableHeader component
  * Bây giờ chúng ta xác định các component trong mô hình giả của chúng ta, cùng sắp xếp chúng theo cấp bâc. Điều này là dễ dàng. Components được xuất hiện bên trong một component khác trong mô hình giả nên xuất hiện như một con trong hệ thống phân cấp
    * FilterTableProductTable
      * Searchbar
      * ProductTable
        * ProductCategoryRow
        * ProductRow
# Bước2: Xây dựng một phiên bản tĩnh trong React     
 * Bây giờ bạn có các component phân cấp, đây là lúc triên khai ứng dụng của bạn. Cách dễ nhất là xây dựng một phiên bản  lấy dữ liêu từ mô hình của bạn và triển khai trên giao diện UI nhưng nó không có sự tương tác. Cách tốt nhất là tách riêng các tiến trình này bởi vì xây dựng a phiên bản tĩnh đòi hỏi phải gõ rất nhiều và không có nhiều suy nghĩ, và thêm tính tương tác đòi hỏi rất nhiều suy nghĩ mà không cần phải gõ nhiều. Chúng ta sẽ thấy tại sao.
 * Để xây dựng phiên bản tĩnh cho ứng dụng của bạn là trình bày mô hình dữ liệu, Bạn sẽ muốn xây dựng các component có thể tái sử dụng các component khác và truyền dữ liệu sử dụng props. Props là các truyền dữ liệu từ cha đến con. Nếu bạn quen với khái niêm state, không sử dụng state tại tất cả các phiên bản tĩnh. State chỉ dành riêng cho tính tương tác, nghĩa là dữ liệu thay đổi theo thời gian. Vì đây là phiên bản ứng dụng tĩnh, chúng ta không cần nó.
 * Bạn có thể xây dựng từ trên xuống dưới hoặc từ dưới lên trên. Nghĩa là bạn có thể bắt đầu với việc xây dựng Components cao nhất trong hệ thống phân cấp (vd: bắt đầu với FilterableProductTable) hoặc với components thấp nhất (ProductRow). Trong ví dụ đơn giản, thường từ trên xuống dưới trở lên dễ dàng hơn và trong dự án lớn dễ dàng hơn khi đi từ dưới lên trên và viết test khi bạn xây dựngdựng
 * Ở cuối bước này, Bạn sẽ có môt thư viện tái sử dụng được các component có thể hiển thị mô hình dữ liệu.Các Component sẽ chỉ có một phương thức render() từ khi đây là phiên bản tĩnh ứng dụng của bạn. Các component ở trên cùng của hệ thống phân cấp(FilterableProductTable) sẽ lấy dữ liệu trong mô hình của bạn như một props. Nếu bạn thực hiện một thay đổi đến mô hình dữ liệu cơ bản và gọi lại ReactDOM.render(), Giao diện người dùng sẽ được cập nhật lại. Thật Dễ dàng để xem giao diện được cập nhật và có thể thực hiện thay đổi