/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        timestamp: 0,
        dateString: "",
    },
    reducers: {
        updateDataFormate: (state, action) => {
            state.timestamp = action.payload;
        },
        updateDataFormateSeller: (state, action) => {
            state.dateString = action.payload;
        },
    },
});

export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const currentDate = new Date();

    const dayDiff = Math.floor(
        (currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (dayDiff === 0) {
        // Публикация на сегодняшний день
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `Сегодня в ${hours}:${minutes}`;
    }
    if (dayDiff === 1) {
        // Публикация сделанная вчера
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `Вчера в ${hours}:${minutes}`;
    }
    // Публикация сделанная больше двух дней назад
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const monthNames = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];

    return `${day} ${monthNames[monthIndex]} ${year}, в ${hours}:${minutes}`;
};

export const getMonthName = (month) => {
    const monthNames = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];

    return monthNames[month];
};

export const formatDateSeller = (dateString) => {
    // Преобразование строки даты в объект Date
    const date = new Date(dateString);

    // Определение текущей даты и месяца
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Определение даты и месяца указанной даты
    const year = date.getFullYear();
    const month = date.getMonth();

    // Разница в месяцах между текущей датой и указанной датой
    const diffMonths = (currentYear - year) * 12 + currentMonth - month;

    // Определение окончания для слова "месяц"
    let monthEnding = "";
    if (diffMonths === 1) {
        monthEnding = "а";
    } else if (diffMonths > 1 && diffMonths < 5) {
        monthEnding = "я";
    } else {
        monthEnding = "ев";
    }

    // Формирование строки
    const formattedDate = `Продает товары с ${getMonthName(month)} ${year}`;

    // Use the monthEnding variable in the formattedDate string
    const fullFormattedDate = `${formattedDate}, ${diffMonths} месяц${monthEnding}`;

    return fullFormattedDate;
};

export const { updateDataFormate, updateDataFormateSeller } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
