import { MessageEmbed } from 'discord.js';

// we try to simulate a `struct` (similar to C) to store the date
export const TIME: { [key: string]: number } = {
    'year':     Number(),
    'month':    Number(),
    'day':      Number()

}
export const [ERROR, OK_EMOJI]: string[] = ['🆘', '🆗'];
const EMBED_URL: string = 'https://lh4.googleusercontent.com/go80mh9N90WT7n0mIZM5Kl9uuZhLYLHz-wmPnnx3ioTH2MBivRSLpCKsWoMGWBcgGpo=w2400';

export const getDaysSince: Function = (start: { [key: string]: number }): number => {
    if (start.month > 12 || start.month < 1) return -1;                         // make sure that a valid month is provided (1-12)
    const maxDays: number = new Date(start.year, start.month, 0).getDate();     // here we validate the max. number of days in the month
    if (start.day > maxDays) return -1;                                         // compare the day with the max. number of days in the month

    const initialDate: Date = new Date(start.year, start.month - 1, start.day);
    return Math.floor((Date.now() - initialDate.getTime()) / (1000 * 3600 * 24));
}

export const embedUsage: Function = (botID: number): MessageEmbed => {
    return new MessageEmbed()
        .setTitle('⏰ | Days Since')
        .setFields([
            { name: "Days since a Ragnar Incident", value: `< **Since** \`DD:MM:YY\`` }
        ])
        .setColor('#3b0202')
        .setImage(EMBED_URL)
}

export const embedDaysSince = (dayCount: number, dayStart: string): MessageEmbed => {
    return new MessageEmbed()
        .setTitle(`Days Since a Ragnar Incident \`${dayStart}\``)
        .setColor('#31010b')
        .setFields([
            { name: '**Count**', value: `${dayCount}` }
        ])
        .setImage(EMBED_URL)
}
