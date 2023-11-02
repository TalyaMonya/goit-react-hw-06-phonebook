import { Div, Input, Label, Span } from "./Filter.styled";
import { FaSearch } from "react-icons/fa";



export const Filter = ({ value, onChangeFilter }) => {
    return (
        <Div>
            <Label>
                <Span><FaSearch size="16"/>Find contacts by name</Span>
                <Input type="text" value={value} onChange={onChangeFilter}/>
            </Label>
        </Div>
    )
}