import { AnimatedSection } from './AnimatedSection';
import { CheckCircle2, Clock, MapPin, Package } from 'lucide-react';
import { ShipmentStatusEnum } from '@meridian/shared-types';

interface TimelineEvent {
  id: string;
  status: string;
  location: string;
  note?: string | null;
  timestamp: string | Date;
}

interface TrackingTimelineProps {
  events: TimelineEvent[];
  currentStatus: string;
}

const statusOrder = [
  ShipmentStatusEnum.PLACED,
  ShipmentStatusEnum.PICKED_UP,
  ShipmentStatusEnum.IN_TRANSIT,
  ShipmentStatusEnum.OUT_FOR_DELIVERY,
  ShipmentStatusEnum.DELIVERED,
];

const statusConfig = {
  [ShipmentStatusEnum.PLACED]: { icon: Package, label: 'Order Placed' },
  [ShipmentStatusEnum.PICKED_UP]: { icon: MapPin, label: 'Picked Up' },
  [ShipmentStatusEnum.IN_TRANSIT]: { icon: Clock, label: 'In Transit' },
  [ShipmentStatusEnum.OUT_FOR_DELIVERY]: { icon: Package, label: 'Out for Delivery' },
  [ShipmentStatusEnum.DELIVERED]: { icon: CheckCircle2, label: 'Delivered' },
};

export const TrackingTimeline = ({ events, currentStatus }: TrackingTimelineProps) => {
  // Sort events chronologically (oldest first)
  const sortedEvents = [...events].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  
  const currentIndex = statusOrder.indexOf(currentStatus as ShipmentStatusEnum);

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      {/* Horizontal Status Bar */}
      <div className="relative mb-16 hidden md:block">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 rounded-full" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-secondary -translate-y-1/2 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${(currentIndex / (statusOrder.length - 1)) * 100}%` }}
        />
        
        <div className="relative flex justify-between">
          {statusOrder.map((status, index) => {
            const isCompleted = index <= currentIndex;
            const isCurrent = index === currentIndex;
            const ConfigIcon = statusConfig[status].icon;
            
            return (
              <div key={status} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-4 relative z-10 transition-colors duration-500
                    ${isCompleted 
                      ? 'bg-secondary border-background text-secondary-foreground' 
                      : 'bg-background border-muted text-muted-foreground'
                    }
                    ${isCurrent ? 'ring-4 ring-secondary/20' : ''}
                  `}
                >
                  <ConfigIcon className="w-4 h-4" />
                </div>
                <div className={`mt-3 text-sm font-medium absolute top-12 whitespace-nowrap -translate-x-1/2 left-1/2
                  ${isCompleted ? 'text-foreground' : 'text-muted-foreground'}
                `}>
                  {statusConfig[status].label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vertical Timeline Events */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted before:to-transparent">
        {sortedEvents.map((event, index) => {
          const isLatest = index === sortedEvents.length - 1;
          const date = new Date(event.timestamp);
          
          return (
            <AnimatedSection 
              key={event.id} 
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'right' : 'left'}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow
                ${isLatest ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'}
              `}>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border rounded-lg p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="font-bold text-primary">{statusConfig[event.status as ShipmentStatusEnum]?.label || event.status}</h4>
                  <time className="text-xs text-muted-foreground font-medium">
                    {date.toLocaleDateString()} • {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </time>
                </div>
                <div className="text-sm text-foreground/80 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  {event.location}
                </div>
                {event.note && (
                  <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded mt-2 border">
                    {event.note}
                  </p>
                )}
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
};
