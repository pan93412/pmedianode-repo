export interface MediaMeta {
  id: string, // Media ID
  url: string, // Media URL
  title: string, // Media Title
  desc: string, // Media Description
  author: string, // Media Author
  tags: Array<String> // Tags
}

export interface AnnoMeta {
  title: string, // Announcement Title
  content: string, // Announcement Contents
  author: string, // Announcement Author
  date: string // Announcement Date
}