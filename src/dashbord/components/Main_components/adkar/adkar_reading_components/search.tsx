import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { handelInputSearch } from "@/features/adkar/Adkar_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { useTranslation } from "react-i18next";
export function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.adkar);
  const { t } = useTranslation();
  return (
    <InputGroup
      className="max-w-full m-auto my-4 md:max-w-1/2"
      dir={document.dir}>
      <InputGroupInput
        value={inputValue}
        onInput={(e) => {
          const searchValue = (e.target as HTMLInputElement).value;
          setInputValue(searchValue);
          dispatch(
            handelInputSearch({
              searchValue: searchValue.replaceAll(" ", "_"),
            }),
          );
        }}
        placeholder={t(`dashboard.adkar_page.home.searchPlaceholder`)}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        {data.searchStatue
          ? data.searchArrayResLength + t(`dashboard.adkar_page.home.loadMoreResults`)
          :  t(`dashboard.adkar_page.home.searchHint`)}
      </InputGroupAddon>
    </InputGroup>
  );
}
