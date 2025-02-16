"use client";
import FormComponent from "@/components/FormComponent";
import AccordionComponent from "@/components/AccordionComponent";
import CarouselComponent from "@/components/CarouselComponent";
import ScrollAreaComponent from "@/components/ScrollAreaComponent";
import SonnerComponent from "@/components/SonnerComponent";
import DropDownMenuComponent from "@/components/DropDownMenuComponent";
import ComboBoxComponent from "@/components/ComboBoxComponent";
import DatePickerComponent from "@/components/DatePickerComponent";
import DataTableComponents from "@/components/DataTableComponents";

export default function Home() {
  
  return (
    <>
      <FormComponent />
      <SonnerComponent />
      <AccordionComponent />
      <CarouselComponent />
      <ScrollAreaComponent />
      <DropDownMenuComponent />
      <ComboBoxComponent />
      <DatePickerComponent />
      <DataTableComponents />
    </>
  );
}
