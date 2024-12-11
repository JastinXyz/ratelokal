import dayjs, { ConfigType, Dayjs as DayjsReturn } from "dayjs";
import locale from "dayjs/locale/id";

dayjs.locale(locale);

export default function Dayjs(date?: ConfigType): DayjsReturn {
    return dayjs(date);
}