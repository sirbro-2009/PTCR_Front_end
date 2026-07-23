import { useState } from "react";
import type { IquranText } from "../readSurah_components/quran_surah_display";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Field, FieldLabel } from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Ellipsis } from "lucide-react";
import Aya_Number from "../readSurah_components/aya_number";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import AWTC, { AyNUMBER } from "./AyaWithTajwidComp";

export default function AyaQuranDisplay({ contentObjects }: any) {
  const { name, number, tadjwid, revelation_place, verses_count, verses } =
    contentObjects as IquranText;
  const [active, setActive] = useState(1);
  const Data = useAppSelector((state) => state.quran.QDS);

  const goTo = (page: number) => {
    if (page < 1 || page > verses_count) return;
    setActive(page);
  };

  const getPageNumbers = () => {
    const siblings = 1;
    const pages: (number | "ellipsis")[] = [];

    const start = Math.max(2, active - siblings);
    const end = Math.min(verses_count - 1, active + siblings);

    pages.push(1);
    if (start > 2) pages.push("ellipsis");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < verses_count - 1) pages.push("ellipsis");
    if (verses_count > 1) pages.push(verses_count);

    return pages;
  };
  const pageNumber = verses[active - 1]?.page;
  return (
    <div>
      {Data.font === "quranFont" ? (
        <img
          src={`https://everyayah.com/data/images_png/${number}_${active}.png`}
          className="m-auto"
          alt={verses[active - 1]?.text.ar}
        />
      ) : Data.font === "Indopak" ? (
        <p className="w-full font-[Indopak] text-2xl text-center ">
          {verses[active - 1]?.text.ar}
          <AyNUMBER data={{pageNumber:pageNumber!,aya:tadjwid![active-1]!}}/>
          </p>
      ) : (
        <AWTC data={{pageNumber:pageNumber!,aya:tadjwid![active-1]!}}/>
      )}

      {/**      <p className="w-full text-center font-[Indopak] text-2xl">
        {verses[active - 1]?.text.ar}
      </p> */}
      <p className="w-full text-center">
        [{name.ar} : {active}]
      </p>

      <div className="flex items-center flex-col gap-4">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="select-rows-per-page">
            Select aya from here
          </FieldLabel>
          <Select
            defaultValue="1"
            onValueChange={(value) => {
              setActive(Number(value as string));
            }}>
            <SelectTrigger className="w-20" id="select-rows-per-page">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectGroup>
                {Array.from({ length: verses_count }).map((_, i) => {
                  return (
                    <SelectItem value={(i + 1).toString()}>{i + 1}</SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Aya_Number ayaIndex={active - 1} activeDefaultButton={true}>
            <button>
              <Ellipsis size={30} className="cursor-pointer" />
            </button>
          </Aya_Number>
        </Field>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goTo(active - 1);
                }}
                className={active === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {getPageNumbers().map((page, i) =>
              page === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={active === page}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(page);
                    }}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goTo(active + 1);
                }}
                className={
                  active === verses_count
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
