import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const searchInput = () => {
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = () => console.log(value);

    return (
        < Search
            style = {{width: "50%"}}
            placeholder="Filter by Name, Region and SubRegion"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
        />
    )
}

export default searchInput;