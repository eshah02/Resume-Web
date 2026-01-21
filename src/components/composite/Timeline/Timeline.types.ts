export interface TimelineItemData {
  id: string | number;
  title: string;        
  subtitle: string;     
  period: string;      
  location?: string;    
  logo?: string;        
  description?: string;
}

export interface TimelineProps {
  items: TimelineItemData[];
}
