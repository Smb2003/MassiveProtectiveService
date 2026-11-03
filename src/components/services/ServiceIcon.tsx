'use client';

import React from 'react';
import {
  ShieldCheck,
  Shield,
  ShieldAlert,
  Briefcase,
  Users,
  CheckCircle2,
  Plane,
  DoorClosed,
  Scan,
  ClipboardCheck,
  Home,
  Wine,
  Calendar,
  Landmark,
  Building2,
  Handshake,
  Camera,
  Car,
  Sparkles,
  Lock,
  MapPin,
  Clock,
  Check,
  EyeOff,
  FileText,
  Award,
  ArrowRight,
  Ship,
  Anchor,
  PartyPopper,
  Crosshair,
  Globe,
  Compass,
  Route,
  Search,
  BookOpen,
  Monitor,
  Package,
  Key,
  Radio,
  Store,
  ShoppingBag,
  Boxes,
  Footprints,
  Phone,
  ConciergeBell,
  DoorOpen,
  Mic,
  Trophy,
  CameraOff,
  Waves,
  User,
  UserCheck,
  Palmtree,
} from 'lucide-react';

export type ServiceIconName =
  | 'shield-check'
  | 'shield'
  | 'shield-alert'
  | 'briefcase'
  | 'users'
  | 'check-circle'
  | 'plane'
  | 'door-closed'
  | 'scan'
  | 'clipboard-check'
  | 'home'
  | 'wine'
  | 'calendar'
  | 'landmark'
  | 'building'
  | 'handshake'
  | 'camera'
  | 'car'
  | 'sparkles'
  | 'lock'
  | 'map-pin'
  | 'clock'
  | 'check'
  | 'eye-off'
  | 'file-text'
  | 'award'
  | 'arrow-right'
  | 'ship'
  | 'anchor'
  | 'party-popper'
  | 'crosshair'
  | 'globe'
  | 'compass'
  | 'route'
  | 'search'
  | 'book-open'
  | 'monitor'
  | 'package'
  | 'key'
  | 'radio'
  | 'store'
  | 'shopping-bag'
  | 'boxes'
  | 'footprints'
  | 'phone'
  | 'bell'
  | 'concierge-bell'
  | 'door-open'
  | 'mic'
  | 'trophy'
  | 'camera-off'
  | 'waves'
  | 'user'
  | 'user-check'
  | 'executive';

interface Props {
  name: ServiceIconName | string;
  className?: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'shield-check': ShieldCheck,
  shield: Shield,
  'shield-alert': ShieldAlert,
  briefcase: Briefcase,
  users: Users,
  'check-circle': CheckCircle2,
  plane: Plane,
  'door-closed': DoorClosed,
  scan: Scan,
  'clipboard-check': ClipboardCheck,
  home: Home,
  wine: Wine,
  calendar: Calendar,
  landmark: Landmark,
  building: Building2,
  handshake: Handshake,
  camera: Camera,
  car: Car,
  sparkles: Sparkles,
  lock: Lock,
  'map-pin': MapPin,
  clock: Clock,
  check: Check,
  'eye-off': EyeOff,
  'file-text': FileText,
  award: Award,
  'arrow-right': ArrowRight,
  ship: Ship,
  anchor: Anchor,
  'party-popper': PartyPopper,
  crosshair: Crosshair,
  globe: Globe,
  compass: Compass,
  route: Route,
  search: Search,
  'book-open': BookOpen,
  book: BookOpen,
  monitor: Monitor,
  package: Package,
  key: Key,
  radio: Radio,
  store: Store,
  'shopping-bag': ShoppingBag,
  boxes: Boxes,
  footprints: Footprints,
  phone: Phone,
  bell: ConciergeBell,
  'concierge-bell': ConciergeBell,
  'door-open': DoorOpen,
  mic: Mic,
  trophy: Trophy,
  'camera-off': CameraOff,
  waves: Waves,
  user: User,
  'user-check': UserCheck,
  executive: User,
  palmtree: Palmtree,
  palm: Palmtree,
};

export const ServiceIcon: React.FC<Props> = ({ name, className }) => {
  const IconComponent = ICON_MAP[name] || ShieldCheck;
  return <IconComponent className={className} />;
};
