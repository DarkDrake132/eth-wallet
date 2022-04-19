# Hướng dẫn sư dụng ứng dụng Ethereum Wallet:

Đầu tiên clone dự án này về máy với dường link: https://github.com/DarkDrake132/eth-wallet.git bằng các câu lệnh Git hoặc sử dụng Github Desktop.

## Các câu lệnh cần dùng để chạy dự án

Ở trong thư mục code, ta sử dụng bất kỳ IDE nào (khuyến khích sử dụng Visual Studio Code), mở cửa sổ Terminal lên và chạy các câu lệnh sau:

### `npm install` hoặc `yarn install`

Câu lệnh này sẽ cài đặt tất cả các thư viện cần thiết để khởi chạy chương trình.

### `npm start`

Sau khi đã cài đặt xong, chạy câu lệnh này để tiến hành khởi chạy chương trình, chương trình sẽ tự động mở ở localhost:3000 trên borwser mặc định của máy tính.

## Quá trình làm việc

#### Đầu tiên là về tìm hiểu thư viện hỗ trợ tương tác đến mạng Ethereum đó là thư viện ethers.js. Thư viện giúp tiết kiệm được thời gian khi cung cấp các hàm có sẵn như:

```
ethers.fromMnemonic(mnemonic, path)
```
Hàm này giúp ta tạo ra ví từ chuỗi mnemonic

#### Thứ 2 là hàm tạo Instance tới Provider, cụ thể ở ứng dụng này sẽ sử dụng InfuraProvider

```
provider.InfuraProvider(network)
```

#### Tiếp đến, sau khi được kết nối đến provider, ta có thể thực hiện gọi hàm getBalance để lấy tất cả các unspent transaction có public key trùng với address của người dùng và cộng các giá trị lại, giá trị trả về là Wei.

```
provider.getBalance(address)
```

#### Về chức năng ký và gửi transaction, transaction đã được hỗ trợ tối đa đến từ thư viên do đó khi tạo tả chỉ cần tạo 1 Object như sau:

```
const tx = {
  to: address,
  value: etherFormatString
}
```

Khi gửi transaction ta cần thực hiện đó là ký transaction và tạo một wallet instance mới, kết nối instance này tới provider và gửi transaction đi

```
wallet.signTransaction(tx);
const walletInstance = wallet.connect(provider);
walletInstance.sendTransaction(tx);
```

#### Cuối cùng đó là hiển thị ra danh sách các transaction đã được xác nhận bởi các Miner trên mạng Ethereum, mạng này sử dụng PoW với công việc d91 là hash các block sao cho chuỗi hash các block đều thỏa số nonce được quy định (số nonce này được quyết định sẵn khi ta gửi transaction).

Ngoài ra, để có được danh sách các transaction thì chương trình có sử dụng 3 API Endpoint được cung cấp bởi https://etherscan.io/ bao gồm:

  * https://api.etherscan.io dành cho Mainnet
  * https://api-ropsten.etherscan.io dành cho Ropsten
  * https://api-rinkeby.etherscan.io dành cho Rinkeby

## Tài liệu tham khảo

Tài liệu ReactJS [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

Tài liệu UI [MUI](https://mui.com/)

Tài liệu thư viện tương tác với mạng Ethereum [ethers.js](https://docs.ethers.io/v5/)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Thông tin khác
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Video demo sản phẩm: https://youtu.be/tWAgo1p-nQE
