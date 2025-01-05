import { format, getTime, formatDistanceToNow, getYear, isSameDay, isSameMonth } from "date-fns";

// ----------------------------------------------------------------------

type DateType = Date | number | string;

export function fDate(date: DateType, newFormat?: string) {
	const fm = newFormat || "dd MMM yyyy";

	return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date: DateType, newFormat?: string) {
	const fm = newFormat || "dd MMM yyyy p";

	return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date: DateType) {
	return date ? getTime(new Date(date)) : "";
}

export function fToNow(date: DateType) {
	return date
		? formatDistanceToNow(new Date(date), {
				addSuffix: true,
		  })
		: "";
}

export function shortDateLabel(startDate: Date | undefined, endDate: Date | undefined) {
	if (!startDate) return null;
	endDate = endDate ?? startDate;
	const getCurrentYear = new Date().getFullYear();

	const startDateYear = getYear(startDate);

	const endDateYear = getYear(endDate);

	const currentYear = getCurrentYear === startDateYear && getCurrentYear === endDateYear;

	const sameDay = startDate && endDate ? isSameDay(new Date(startDate), new Date(endDate)) : false;

	const sameMonth = startDate && endDate ? isSameMonth(new Date(startDate), new Date(endDate)) : false;

	if (currentYear) {
		if (sameMonth) {
			if (sameDay) {
				return fDate(endDate, "dd MMM yyyy");
			}
			return `${fDate(startDate, "dd")} - ${fDate(endDate, "dd MMM yyyy")}`;
		}
		return `${fDate(startDate, "dd MMM")} - ${fDate(endDate, "dd MMM yyyy")}`;
	}

	return `${fDate(startDate, "dd MMM yyyy")} - ${fDate(endDate, "dd MMM yyyy")}`;
}
