import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { handelInputSearch } from "@/features/adkar/Adkar_slice";
import { useAppDispatch,useAppSelector } from "@/hooks/Redux";
export function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch()
  const data = useAppSelector(state=>state.adkar)
  return (
    <InputGroup
      className="max-w-full m-auto my-4 md:max-w-1/2"
      dir={document.dir}>
      <InputGroupInput
        value={inputValue}
        onInput={(e) => {
          const searchValue = (e.target as HTMLInputElement).value
          setInputValue(searchValue);
          dispatch(handelInputSearch({searchValue}))
        }}
        placeholder="Search in adkar..."
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">{data.searchStatue?data.searchArrayResLength + ' results':'try searching'}</InputGroupAddon>
    </InputGroup>
  );
}
