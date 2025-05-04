export type RequestDate = string;

export type RequestEventData = {
  status: string,
  card_title: string,
  tag: {
    title: string,
    color: string,
  }
  start_date_time: string,
  end_date_time: string,
}