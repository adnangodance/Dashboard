import { Fragment, createContext, useContext, useState, useRef, useEffect, useLayoutEffect, useMemo, type CSSProperties, type Dispatch, type FormEvent, type PointerEvent as ReactPointerEvent, type SetStateAction } from "react";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  ShoppingCart,
  Users,
  MessageSquare,
  Settings,
  RefreshCw,
  Search,
  Heart,
  Bell,
  ChevronDown,
  ChevronsUpDown,
  Package,
  Building2,
  Plus,
  Filter,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  CheckCircle2,
  Clock,
  AlertCircle,
  TriangleAlert,
  XCircle,
  Eye,
  Truck,
  Star,
  ChevronLeft,
  ChevronRight,
  Upload,
  Download,
  Trash2,
  Edit3,
  Phone,
  Mail,
  MapPin,
  Shield,
  CreditCard,
  User,
  Lock,
  Globe,
  Leaf,
  Minus,
  Syringe,
  X,
  Loader2,
  EyeOff,
  LogOut,
  Flag,
  Send,
  Snowflake,
  Copy,
  Tag,
} from "lucide-react";

import img430 from "@/imports/ScriptlinkrxDashboard/9b6fa0a3b334659006bcf39e91b4da387a7b4cf0.png";
import img429 from "@/imports/ScriptlinkrxDashboard/5a66df92e25e912526cc119832b732deeacaa033.png";
import img431 from "@/imports/ScriptlinkrxDashboard/143a980412abcd77313d7193a14da8e48a539c1c.png";
import img432 from "@/imports/ScriptlinkrxDashboard/6c60baab03165ef8abab5f7207471c9c98cd8c6d.png";
import img433 from "@/imports/ScriptlinkrxDashboard/468b9aadf5afc5b0889fbadb2123d9b07618a907.png";
import img434 from "@/imports/ScriptlinkrxDashboard/92c24c340582162a18a98ce2172b6b88031eda43.png";
import img452dash from "@/imports/ScriptlinkrxDashboard/3208bf4564f5f1a2415d12b2e8ebf09c778bfcf1.png";
import img435 from "@/imports/ScriptlinkrxDashboard/928e96867c205b0e19e479ab55e64e7d8c644861.png";
import img436 from "@/imports/ScriptlinkrxDashboard/5f05b98bbd5f4366dde6987174a5ce7f9da06055.png";
import img437 from "@/imports/ScriptlinkrxDashboard/9acef17dd58ea5f905eacb97963e7153fb513dbc.png";
import img438 from "@/imports/ScriptlinkrxDashboard/105218643749a83b70d0b0c96a7e3dc7e0fc3f13.png";
import img439 from "@/imports/ScriptlinkrxDashboard/4594cb4d36df6eeef8a6896fc4f35a79e5091a7d.png";
import img440 from "@/imports/ScriptlinkrxDashboard/71b3a03610647f4c97f26448ddda3dbc36882006.png";
import imgPT141 from "@/imports/ScriptlinkrxProductPage/76629cbe854957543c2416420a71b8b9d0316bd3.png";
import imgAminoQuad from "@/assets/amino-quad.png";
import imgNadInjection from "@/assets/nad-injection.png";
import imgOrderAminoQuad from "@/assets/order-amino-quad.png";
import imgOrderOxytocin from "@/assets/order-oxytocin.png";
import imgOrderOxytocinAlt from "@/assets/order-oxytocin-alt.png";
import landingGlutathione from "@/assets/landing-glutathione.png";
import landingNadInjection from "@/assets/landing-nad-injection.png";
import landingTestosterone from "@/assets/landing-testosterone-cypionate.png";
import landingTriMix from "@/assets/landing-tri-mix.png";
import imgProduct452 from "@/imports/ScriptlinkrxProductPage/a7404d4186f9383142485474193c8c2ca1b2259c.png";
import scriptlinkrxLogo from "@/assets/scriptlinkrx-logo.svg";
import scriptlinkrxLandingLogo from "@/assets/scriptlinkrx-landing-logo.png";
import supportShayne from "@/assets/support-shayne.png";
import supportZee from "@/assets/support-zee.png";
import userVerifiedIcon from "@/assets/user-verified.svg";
import blankVialReference from "@/assets/blank-vial-reference.png";
import blankNasalSprayReference from "@/assets/blank-nasal-spray-reference.png";
import blankLyophilizedVialReference from "@/assets/blank-lyophilized-vial-reference.png";
import blankTopicalDropperReference from "@/assets/blank-topical-dropper-reference.png";
import blankPatchPackageReference from "@/assets/blank-patch-package-reference.png";
import blankCapsuleBottleReference from "@/assets/blank-capsule-bottle-reference.png";
import { INJECTION_PRODUCT_SEEDS } from "./injection-products";
import { NASAL_SPRAY_PRODUCT_SEEDS } from "./nasal-spray-products";
import { LYOPHILIZED_PRODUCT_SEEDS } from "./lyophilized-products";
import { TOPICAL_PRODUCT_SEEDS } from "./topical-products";
import { PATCH_PRODUCT_SEEDS } from "./patch-products";
import { CAPSULE_PRODUCT_SEEDS } from "./capsule-products";

type Page =
  | "dashboard"
  | "products"
  | "favorites"
  | "product-detail"
  | "pharmacies"
  | "orders"
  | "order-detail"
  | "support"
  | "users"
  | "settings"
  | "cart-single"
  | "cart-multi"
  | "checkout-prescription";

type AppTheme = "default" | "orange";

type CartMode = "single" | "multi";
type CheckoutSubmissionState = "idle" | "submitting" | "submitted";

const DEFAULT_PAGE: Page = "products";

function CheckoutSubmissionFooter({
  state,
  submitLabel,
  onSubmit,
  onEdit,
  onGoToOrders,
}: {
  state: CheckoutSubmissionState;
  submitLabel: string;
  onSubmit: () => void;
  onEdit?: () => void;
  onGoToOrders: () => void;
}) {
  if (state === "submitted") {
    return (
      <div className="w-full">
        <div className="mb-4 rounded-[14px] border border-[#dce8df] bg-[#f7faf8] px-4 py-5 text-center">
          <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-[#e1efe7] text-[#183229]">
            <CheckCircle2 size={20} strokeWidth={1.9} />
          </span>
          <p className="mt-3 text-[17px] font-semibold tracking-[-0.02em] text-[#171717]">Your order has been submitted!</p>
          <p className="mt-1 text-[11px] leading-[17px] text-[#6f7782]">We&apos;ll follow up with status updates once it&apos;s shipped.</p>
        </div>
        <button onClick={onGoToOrders} className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#111] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]">
          Go to orders
        </button>
        <button className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-full text-[12px] font-semibold text-[#183229] transition-colors hover:bg-[#f2f4f3]">
          <Download size={14} /> Download receipt
        </button>
      </div>
    );
  }

  if (state === "submitting") {
    return (
      <button disabled className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#111] text-[13px] font-semibold text-white opacity-90">
        <span className="size-4 rounded-full border-2 border-white/35 border-t-white animate-spin" />
        Submitting...
      </button>
    );
  }

  return (
    <div className={onEdit ? "flex w-full gap-2" : "w-full"}>
      {onEdit && (
        <button onClick={onEdit} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[8px] border border-[#183229] text-[13px] font-semibold text-[#183229]">
          <ChevronLeft size={15} /> Edit order
        </button>
      )}
      <button onClick={onSubmit} className={`${onEdit ? "h-10 flex-1 rounded-[8px]" : "h-[52px] w-full rounded-full"} flex items-center justify-center gap-2 bg-[#111] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]`}>
        {onEdit && <CheckCircle2 size={15} />}
        {submitLabel}
      </button>
    </div>
  );
}

type ProductFavoritesContextValue = {
  favoriteProductIds: Set<number>;
  setFavoriteProductIds: Dispatch<SetStateAction<Set<number>>>;
  favoriteProducts: CardDef[];
};

const ProductFavoritesContext = createContext<ProductFavoritesContextValue | null>(null);

function useProductFavorites() {
  const context = useContext(ProductFavoritesContext);
  if (!context) {
    return {
      favoriteProductIds: new Set<number>(),
      setFavoriteProductIds: (() => undefined) as Dispatch<SetStateAction<Set<number>>>,
      favoriteProducts: [],
    };
  }
  return context;
}

type CartSummaryContextValue = {
  cartItemCount: number;
  cartPreviewItems: CartPreviewItem[];
  addCartItems: (count?: number, product?: CartPreviewItem) => void;
  updateCartItemQty: (id: number, delta: number) => void;
  removeCartItem: (id: number) => void;
  clearCartItems: () => void;
};

type CartPreviewItem = {
  id: number;
  name: string;
  price: string;
  img: string;
  qty?: number;
};

type PatientCartEntry = {
  id: number;
  patientId: number;
  product: CardDef;
  qty: number;
  pharmacy: string;
  size: string;
  strength: string;
  injectionType: string;
  unitPrice: number;
};

const CartSummaryContext = createContext<CartSummaryContextValue | null>(null);

function useCartSummary() {
  const context = useContext(CartSummaryContext);
  if (!context) {
    return {
      cartItemCount: 0,
      cartPreviewItems: [],
      addCartItems: () => undefined,
      updateCartItemQty: () => undefined,
      removeCartItem: () => undefined,
      clearCartItems: () => undefined,
    };
  }
  return context;
}

type AppLoadingContextValue = {
  runWithAppLoader: (action: () => void, delayMs?: number) => void;
  showToast: (message: string, type?: "success" | "error") => void;
};

const AppLoadingContext = createContext<AppLoadingContextValue | null>(null);

function useAppLoading() {
  const context = useContext(AppLoadingContext);
  if (!context) {
    return {
      runWithAppLoader: (action: () => void) => action(),
      showToast: () => undefined,
    };
  }
  return context;
}

// ─── Design System Primitives ────────────────────────────────────────────────

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info" | "neutral";
}) {
  const styles = {
    default: "bg-[#f0f0f0] text-[#1a1a1a]",
    success: "bg-[#d4f4e3] text-[#0a5c35]",
    warning: "bg-[#fef3c7] text-[#92400e]",
    error: "bg-[#fee2e2] text-[#991b1b]",
    info: "bg-[#dbeafe] text-[#1e40af]",
    neutral: "bg-[#f3f4f6] text-[#6b7280]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function PageBackButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-r-[12px] bg-[#f0f1f2] text-[#183229] transition-colors hover:bg-[#e6e8e9]"
    >
      <ChevronLeft size={21} strokeWidth={2} />
    </button>
  );
}

function AppActionOverlay({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/65 backdrop-blur-[1px]" role="status" aria-live="polite" aria-label="Processing">
      <Loader2 size={42} className="animate-spin text-[#183229]" />
    </div>
  );
}

function AppToast({
  toast,
  onClose,
}: {
  toast: { type: "success" | "error"; message: string } | null;
  onClose: () => void;
}) {
  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div className="fixed bottom-6 left-1/2 z-[10000] w-[min(418px,calc(100vw-24px))] -translate-x-1/2" role="status" aria-live="polite">
      <div className="flex h-[45px] items-center gap-2 rounded-full bg-white px-4 shadow-[0_5px_0_rgba(20,20,20,0.10),0_9px_10px_rgba(20,20,20,0.24)]">
        <span className={`flex size-[14px] shrink-0 items-center justify-center rounded-full text-white ${isSuccess ? "bg-[#45AD68]" : "bg-[#EB4F47]"}`}>
          {isSuccess ? <Check size={8} strokeWidth={3} /> : <X size={8} strokeWidth={3} />}
        </span>
        <p className="min-w-0 flex-1 truncate text-[12px] font-medium text-[#171717]">{toast.message}</p>
        <button
          type="button"
          onClick={onClose}
          className="h-[33px] shrink-0 rounded-full bg-[#485DDD] px-[15px] text-[12px] font-medium text-white transition-colors hover:bg-[#3E52CF]"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Pending: "bg-amber-400",
    Processing: "bg-blue-400",
    Shipped: "bg-purple-400",
    Delivered: "bg-emerald-400",
    Cancelled: "bg-red-400",
    Active: "bg-emerald-400",
    Inactive: "bg-gray-300",
    Open: "bg-blue-400",
    Resolved: "bg-emerald-400",
    Urgent: "bg-red-400",
  };
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors[status] ?? "bg-gray-400"}`} />
  );
}

function StatCard({
  label,
  value,
  delta,
  positive,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="bg-card rounded-xl p-5 border border-[#eaeaea] flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <span className="text-[13px] text-[#9d9d9d] font-medium">{label}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
          <Icon size={15} className="text-white" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-[26px] font-semibold text-[#1a1a1a] leading-none">{value}</span>
        {delta && (
          <span
            className={`flex items-center gap-0.5 text-[12px] font-medium ${positive ? "text-emerald-600" : "text-red-500"}`}
          >
            {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

type MenuItem = { icon: React.ElementType; label: string; page: Page };

const INITIAL_FAVORITES: MenuItem[] = [
];

const INITIAL_MAIN: MenuItem[] = [
  { icon: BookOpen, label: "Catalog", page: "products" },
  { icon: ClipboardList, label: "Orders", page: "orders" },
  { icon: ShoppingCart, label: "Cart", page: "cart-multi" },
  { icon: Users, label: "Patients", page: "users" },
  { icon: MessageSquare, label: "Support Tickets", page: "support" },
];

function NavItem({
  item,
  isPinned,
  isActive,
  section,
  hoveredItem,
  openMenu,
  dragItemRef,
  dragOverItemRef,
  onNavigate,
  onHover,
  onOpenMenu,
  onPin,
  onDrop,
}: {
  item: MenuItem;
  isPinned: boolean;
  isActive: boolean;
  section: "fav" | "main";
  hoveredItem: string | null;
  openMenu: string | null;
  dragItemRef: React.MutableRefObject<{ label: string; section: "fav" | "main" } | null>;
  dragOverItemRef: React.MutableRefObject<{ label: string; section: "fav" | "main" } | null>;
  onNavigate: (p: Page) => void;
  onHover: (label: string | null) => void;
  onOpenMenu: (label: string | null) => void;
  onPin: (item: MenuItem, isPinned: boolean) => void;
  onDrop: () => void;
}) {
  const { icon: Icon, label, page } = item;
  const isHovered = hoveredItem === label;
  const menuOpen = openMenu === label;
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div
      className="relative"
      draggable
      onDragStart={() => { dragItemRef.current = { label, section }; }}
      onDragEnter={() => { dragOverItemRef.current = { label, section }; setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => { setIsDragOver(false); onDrop(); }}
      onDragEnd={() => { dragItemRef.current = null; dragOverItemRef.current = null; setIsDragOver(false); }}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
    >
      {isDragOver && (
        <div className="absolute inset-x-0 top-0 h-0.5 bg-[#183229] rounded-full -translate-y-px" />
      )}
      <div
        className={`flex h-10 w-full cursor-grab select-none items-center gap-2.5 rounded-[9px] px-2.5 text-[13px] font-normal text-[#242424] transition-colors active:cursor-grabbing ${
          isActive ? "bg-[#F2F3F4] text-[#171717]" : isDragOver ? "bg-[#F6F7F7]" : "hover:bg-[#F6F6F5]"
        }`}
        onClick={() => {
          if (label === "Hard Refresh") {
            window.location.reload();
            return;
          }
          onNavigate(page);
          onOpenMenu(null);
        }}
      >
        <Icon size={16} strokeWidth={1.65} className="flex-shrink-0 text-[#303332]" />
        <span className="flex-1">{label}</span>
        <span className="size-6 flex-shrink-0" />
      </div>
    </div>
  );
}

function Sidebar({
  active,
  onNavigate,
  cartPage,
  onLogout,
  appTheme,
  setAppTheme,
  extraVariants,
  setExtraVariants,
  oldCatalog,
  setOldCatalog,
  pharmacyCatalog,
  setPharmacyCatalog,
}: {
  active: Page;
  onNavigate: (p: Page) => void;
  cartPage: Page;
  onLogout: () => void;
  appTheme: AppTheme;
  setAppTheme: Dispatch<SetStateAction<AppTheme>>;
  extraVariants: boolean;
  setExtraVariants: Dispatch<SetStateAction<boolean>>;
  oldCatalog: boolean;
  setOldCatalog: Dispatch<SetStateAction<boolean>>;
  pharmacyCatalog: boolean;
  setPharmacyCatalog: Dispatch<SetStateAction<boolean>>;
}) {
  const [favorites, setFavorites] = useState<MenuItem[]>(INITIAL_FAVORITES);
  const [mainMenu, setMainMenu] = useState<MenuItem[]>(INITIAL_MAIN);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const dragItem = useRef<{ label: string; section: "fav" | "main" } | null>(null);
  const dragOverItem = useRef<{ label: string; section: "fav" | "main" } | null>(null);

  function handlePin(item: MenuItem, isPinned: boolean) {
    if (isPinned) {
      setFavorites((prev) => prev.filter((f) => f.label !== item.label));
      setMainMenu((prev) => [...prev, item]);
    } else {
      setMainMenu((prev) => prev.filter((m) => m.label !== item.label));
      setFavorites((prev) => [...prev, item]);
    }
    setOpenMenu(null);
  }

  function handleDrop() {
    const from = dragItem.current;
    const to = dragOverItem.current;
    if (!from || !to || from.label === to.label) return;

    const reorder = (list: MenuItem[], fromLabel: string, toLabel: string) => {
      const arr = [...list];
      const fromIdx = arr.findIndex((i) => i.label === fromLabel);
      const toIdx = arr.findIndex((i) => i.label === toLabel);
      if (fromIdx === -1 || toIdx === -1) return arr;
      const [moved] = arr.splice(fromIdx, 1);
      arr.splice(toIdx, 0, moved);
      return arr;
    };

    if (from.section === "fav" && to.section === "fav") {
      setFavorites((prev) => reorder(prev, from.label, to.label));
    } else if (from.section === "main" && to.section === "main") {
      setMainMenu((prev) => reorder(prev, from.label, to.label));
    }

    dragItem.current = null;
    dragOverItem.current = null;
  }

  const handleNavigate = (nextPage: Page) => {
    onNavigate(nextPage === "cart-multi" ? cartPage : nextPage);
  };

  const navItemProps = {
    hoveredItem, openMenu,
    dragItemRef: dragItem, dragOverItemRef: dragOverItem,
    onNavigate: handleNavigate, onHover: setHoveredItem, onOpenMenu: setOpenMenu,
    onPin: handlePin, onDrop: handleDrop,
  };

  return (
    <aside className="sticky top-0 flex h-screen w-[248px] flex-shrink-0 flex-col bg-[#FCFBFA] px-3">
      {/* Logo */}
      <button
        type="button"
        onClick={() => onNavigate("products")}
        className="flex min-w-0 cursor-pointer items-center gap-2.5 py-4 text-left"
        aria-label="Go to catalog"
      >
        <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[25px] w-8 object-contain" />
        <span className="min-w-0 flex-1 truncate font-['Poppins',sans-serif] text-[16px] font-semibold uppercase tracking-wide text-[#1a1a1a]">
          S<span className="lowercase">CRIPTLINKrx</span>
        </span>
        <span className="flex size-7 shrink-0 items-center justify-center rounded-[7px] text-[#666] hover:bg-[#F1F2F2]" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.25" y="2.25" width="11.5" height="11.5" rx="3" stroke="currentColor" strokeWidth="1.2"/><path d="M9.25 2.75V13.25" stroke="currentColor" strokeWidth="1.2"/></svg></span>
      </button>

      {/* New Order */}
      <div className="pb-4">
        <button
          type="button"
          onClick={() => onNavigate("products")}
          className="flex h-11 w-full cursor-pointer items-center gap-2 rounded-[11px] border border-[#DFE1E3] bg-white px-3 text-left transition-colors hover:border-[#C7CECA] hover:bg-[#F8F9F8]"
        >
          <span className="flex size-5 shrink-0 items-center justify-center text-[#1f2220]">
            <Plus size={15} strokeWidth={1.9} />
          </span>
          <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-[#1a1a1a]">New Order</span>
          <span className="flex shrink-0 items-center gap-0.5 text-[#9a9e9c]"><kbd className="flex size-5 items-center justify-center rounded-[4px] bg-[#F1F2F3] text-[10px]">⌘</kbd><kbd className="flex size-5 items-center justify-center rounded-[4px] bg-[#F1F2F3] text-[10px]">K</kbd></span>
        </button>
      </div>

      {/* Main Menu */}
      <div>
        <p className="mb-1.5 px-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#A0A4A2]">Main Menu</p>
        <div className="flex flex-col gap-0.5">
          {mainMenu.map((item) => {
            const isActive = item.page === "cart-multi" ? active === cartPage : item.page === "orders" ? active === "orders" || active === "order-detail" : active === item.page && item.label !== "Hard Refresh";
            return <NavItem key={item.label} item={item} isPinned={false} isActive={isActive} section="main" {...navItemProps} />;
          })}
        </div>
      </div>

      <div className="mt-auto" />
      <SidebarSupportVersion onNavigate={onNavigate} onLogout={onLogout} />
      <div className="pb-3 pt-4">
        <UserChip onNavigate={onNavigate} appTheme={appTheme} setAppTheme={setAppTheme} extraVariants={extraVariants} setExtraVariants={setExtraVariants} oldCatalog={oldCatalog} setOldCatalog={setOldCatalog} pharmacyCatalog={pharmacyCatalog} setPharmacyCatalog={setPharmacyCatalog} />
      </div>
    </aside>
  );
}

function SidebarSupportVersion({ onNavigate, onLogout }: { onNavigate: (p: Page) => void; onLogout: () => void }) {
  const paymentNoticeActive = () => Number(window.sessionStorage.getItem("clinic-card-notice-until") ?? 0) > Date.now();
  const accounts = [
    { name: "Zee Pharmacy", location: "Bronx, NY" },
    { name: "Altin Clinic", location: "Queens County, NY" },
  ];
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const [clinicPaymentEnabled, setClinicPaymentEnabled] = useState(() => window.sessionStorage.getItem("clinic-card-saved") === "true");
  const [clinicPaymentNoticeVisible, setClinicPaymentNoticeVisible] = useState(() => paymentNoticeActive());
  const supportContacts = [
    { name: "Shayne", role: "Head Operator", phone: "917-274-7648", avatar: supportShayne },
    { name: "Zee", role: "CEO", phone: "(646)-617-9881", avatar: supportZee },
  ];

  useEffect(() => {
    const updateClinicPayment = () => {
      setClinicPaymentEnabled(window.sessionStorage.getItem("clinic-card-saved") === "true");
      setClinicPaymentNoticeVisible(paymentNoticeActive());
    };
    window.addEventListener("clinic-payment-updated", updateClinicPayment);
    return () => window.removeEventListener("clinic-payment-updated", updateClinicPayment);
  }, []);

  useEffect(() => {
    if (!clinicPaymentNoticeVisible) return;
    const remainingMs = Number(window.sessionStorage.getItem("clinic-card-notice-until") ?? 0) - Date.now();
    const timeout = window.setTimeout(() => {
      window.sessionStorage.removeItem("clinic-card-notice-until");
      setClinicPaymentNoticeVisible(false);
    }, Math.max(0, remainingMs));
    return () => window.clearTimeout(timeout);
  }, [clinicPaymentNoticeVisible]);

  return (
    <div className="border-y border-[#ECEEEA] py-4">
      <div className="mb-3 flex items-center gap-2 px-1 text-[#8c948f]">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em]">Customer Support</p>
      </div>
      <div className="space-y-1">
        {supportContacts.map((contact) => (
          <div key={contact.name} className="grid grid-cols-[34px_minmax(0,1fr)] items-center gap-2 rounded-[9px] px-1.5 py-1.5 transition-colors hover:bg-[var(--app-menu-bg)]">
            <div className="size-8 overflow-hidden rounded-full bg-[#F1F2F2]">
              <img src={contact.avatar} alt="" className="size-full object-cover" />
            </div>
            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-2">
                <p className="shrink-0 text-[13px] font-medium leading-[16px] text-[#1f2220]">{contact.name}</p>
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="truncate text-[11px] font-normal text-[#667085] transition-colors hover:text-[#2563EB]">{contact.phone}</a>
              </div>
              <p className="truncate text-[11px] font-normal leading-[14px] text-[#8c948f]">{contact.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-3">
        <button type="button" onClick={() => setAccountMenuOpen(current => !current)} className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] bg-[var(--app-menu-bg)] px-2.5 py-2 text-left transition-colors hover:bg-[#EEF0EF]" aria-expanded={accountMenuOpen}>
          <span className="min-w-0 flex-1">
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="truncate text-[12px] font-medium leading-[15px] text-[#1f2220]">{selectedAccount.name}</span>
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-white text-[9px] font-semibold text-[#5f6662]">{accounts.length}</span>
            </span>
            <span className="block truncate text-[11px] font-normal leading-[14px] text-[#8c948f]">Switch account</span>
          </span>
          <ChevronsUpDown size={15} className="shrink-0 text-[#8c948f]" />
        </button>
        {accountMenuOpen && (
          <div className="absolute bottom-[calc(100%+8px)] left-0 z-50 w-full rounded-[12px] border border-[#E0E4EA] bg-white p-2 shadow-[0_16px_40px_rgba(16,24,40,0.14)]">
            <p className="px-2.5 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8A94A6]">Accounts</p>
            <div className="space-y-1">
              {accounts.map(account => {
                const selected = selectedAccount.name === account.name;
                return (
                  <button
                    key={account.name}
                    type="button"
                    onClick={() => { setSelectedAccount(account); setAccountMenuOpen(false); }}
                    className={`flex w-full items-center gap-3 rounded-[9px] px-3 py-2.5 text-left transition-colors ${selected ? "bg-[#F7F8FA]" : "hover:bg-[#F7F8FA]"}`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12px] font-semibold text-[#222]">{account.name}</span>
                      <span className="mt-0.5 block truncate text-[10px] text-[#7C8491]">{account.location}</span>
                    </span>
                    {selected && <CheckCircle2 size={18} strokeWidth={2.2} className="shrink-0 fill-[#2563EB] text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {(!clinicPaymentEnabled || clinicPaymentNoticeVisible) && (
        <div className={`mt-2 rounded-[18px] border border-white/70 p-3 shadow-[0_10px_28px_rgba(38,54,45,0.08)] ${clinicPaymentEnabled ? "bg-[radial-gradient(circle_at_90%_0%,rgba(219,232,255,0.98),transparent_52%),linear-gradient(145deg,#f8fbff_0%,#edf4ff_100%)]" : "bg-[radial-gradient(circle_at_90%_0%,rgba(223,244,238,0.95),transparent_48%),linear-gradient(145deg,#fbfff3_0%,#f8f3e9_100%)]"}`}>
            {clinicPaymentEnabled && <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[9px] font-semibold text-[#2563EB]"><CheckCircle2 size={11} strokeWidth={2.2} /> Card updated</span>}
            <h3 className="text-[15px] font-semibold leading-[19px] tracking-[-0.01em] text-[#171A18]">{clinicPaymentEnabled ? "Pay by Clinic enabled" : "Enable Pay by Clinic"}</h3>
            <p className="mt-1.5 text-[11px] leading-[16px] text-[#737A75]">{clinicPaymentEnabled ? "Your card and ACH account are ready for patient purchases." : "Use your clinic’s card or ACH account for patient purchases."}</p>
            <button
              type="button"
              onClick={() => {
                const eventName = clinicPaymentEnabled ? "open-payment-overview" : "open-payment-setup";
                window.sessionStorage.setItem(eventName, "true");
                window.dispatchEvent(new Event(eventName));
                onNavigate("settings");
              }}
              className="group mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-3 py-2.5 text-[11px] font-semibold text-[#171A18] shadow-[0_3px_12px_rgba(34,46,39,0.06)] transition-transform hover:-translate-y-0.5"
            >
              {clinicPaymentEnabled ? "Manage payment" : "Set up payment"}
              <ArrowUpRight size={13} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
      )}
      <div className="mt-3 space-y-0.5 border-t border-[#ECEEEA] pt-3">
        <button onClick={() => onNavigate("settings")} className="flex h-9 w-full items-center gap-2.5 rounded-[8px] px-2.5 text-left text-[12px] font-medium text-[#555D59] transition-colors hover:bg-[var(--app-menu-bg)] hover:text-[#1F2220]"><Settings size={15} strokeWidth={1.6} /> Settings</button>
        <button onClick={() => window.location.reload()} className="flex h-9 w-full items-center gap-2.5 rounded-[8px] px-2.5 text-left text-[12px] font-medium text-[#555D59] transition-colors hover:bg-[var(--app-menu-bg)] hover:text-[#1F2220]"><RefreshCw size={15} strokeWidth={1.6} /> Hard Refresh</button>
        <button onClick={onLogout} className="flex h-9 w-full items-center gap-2.5 rounded-[8px] px-2.5 text-left text-[12px] font-medium text-[#555D59] transition-colors hover:bg-[var(--app-menu-bg)] hover:text-[#1F2220]"><LogOut size={15} strokeWidth={1.6} /> Log out</button>
      </div>
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function UserChip({
  onNavigate,
  appTheme,
  setAppTheme,
  extraVariants,
  setExtraVariants,
  oldCatalog,
  setOldCatalog,
  pharmacyCatalog,
  setPharmacyCatalog,
}: {
  onNavigate: (p: Page) => void;
  appTheme: AppTheme;
  setAppTheme: Dispatch<SetStateAction<AppTheme>>;
  extraVariants: boolean;
  setExtraVariants: Dispatch<SetStateAction<boolean>>;
  oldCatalog: boolean;
  setOldCatalog: Dispatch<SetStateAction<boolean>>;
  pharmacyCatalog: boolean;
  setPharmacyCatalog: Dispatch<SetStateAction<boolean>>;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeOptions: Array<{ value: AppTheme; label: string }> = [
    { value: "default", label: "Default" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <div className="relative">
      {menuOpen && <button className="fixed inset-0 z-30 cursor-default" onClick={() => setMenuOpen(false)} aria-label="Close account menu" />}
      {menuOpen && (
        <div className="account-menu absolute bottom-[calc(100%+10px)] left-0 z-40 w-[214px] overflow-hidden rounded-[10px] border border-[#dddeda] bg-white shadow-[0_12px_35px_rgba(24,50,41,0.16)]">
          <div className="border-b border-[#eceeea] px-3.5 py-3">
            <p className="text-[12px] font-semibold text-[#1a1a1a]">Zee</p>
            <p className="mt-0.5 text-[10px] text-[#7a837f]">Account menu</p>
          </div>
          <div className="p-1.5">
            <div>
              <p className="px-2.5 pb-1 text-[9px] font-semibold uppercase tracking-[0.11em] text-[#8c948f]">Theme</p>
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setAppTheme(option.value)}
                  className={`flex h-8 w-full items-center justify-between rounded-[7px] px-2.5 text-[11px] font-medium transition-colors hover:bg-[var(--app-menu-bg)] ${appTheme === option.value ? "bg-[var(--app-menu-bg)] text-[#183229]" : "text-[#252525]"}`}
                >
                  <span>{option.label}</span>
                  {appTheme === option.value && <CheckCircle2 size={13} className="text-[#00B33C]" />}
                </button>
              ))}
            </div>
            <div className="my-1.5 border-t border-[#eceeea] pt-1.5">
              <p className="px-2.5 pb-1 text-[9px] font-semibold uppercase tracking-[0.11em] text-[#8c948f]">Variants</p>
              <button
                onClick={() => setExtraVariants(current => !current)}
                className={`flex h-9 w-full items-center justify-between rounded-[7px] px-2.5 text-[11px] font-medium transition-colors hover:bg-[var(--app-menu-bg)] ${extraVariants ? "bg-[var(--app-menu-bg)] text-[#183229]" : "text-[#252525]"}`}
              >
                <span>Extra variants</span>
                <span className={`relative h-5 w-9 shrink-0 rounded-full border transition-all ${extraVariants ? "border-[#0b7045] bg-[#183229] shadow-[inset_0_1px_2px_rgba(0,0,0,0.18)]" : "border-[#cfd4d1] bg-[#e7eae8]"}`}>
                  <span className={`absolute left-[2px] top-[2px] size-[14px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.28)] transition-transform duration-200 ${extraVariants ? "translate-x-4" : "translate-x-0"}`} />
                </span>
              </button>
              <button
                onClick={() => setOldCatalog(current => { const next = !current; if (next) setPharmacyCatalog(false); return next; })}
                className={`flex h-9 w-full items-center justify-between rounded-[7px] px-2.5 text-[11px] font-medium transition-colors hover:bg-[var(--app-menu-bg)] ${oldCatalog ? "bg-[var(--app-menu-bg)] text-[#183229]" : "text-[#252525]"}`}
                role="switch"
                aria-checked={oldCatalog}
              >
                <span>Old catalog</span>
                <span className="flex items-center gap-2">
                  <span className={`min-w-[18px] text-right text-[9px] font-semibold ${oldCatalog ? "text-[#31583f]" : "text-[#929894]"}`}>{oldCatalog ? "On" : "Off"}</span>
                  <span className={`relative h-6 w-11 shrink-0 rounded-full border transition-all duration-200 ${oldCatalog ? "border-[#0b7045] bg-gradient-to-r from-[#183229] to-[#315f4e] shadow-[inset_0_1px_2px_rgba(0,0,0,0.18),0_0_0_2px_rgba(24,50,41,0.06)]" : "border-[#cfd4d1] bg-[#e7eae8]"}`}>
                    <span className={`absolute left-[3px] top-[3px] size-4 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-out ${oldCatalog ? "translate-x-5" : "translate-x-0"}`} />
                  </span>
                </span>
              </button>
              <button
                onClick={() => setPharmacyCatalog(current => { const next = !current; if (next) setOldCatalog(false); return next; })}
                className={`flex h-9 w-full items-center justify-between rounded-[7px] px-2.5 text-[11px] font-medium transition-colors hover:bg-[var(--app-menu-bg)] ${pharmacyCatalog ? "bg-[var(--app-menu-bg)] text-[#183229]" : "text-[#252525]"}`}
                role="switch"
                aria-checked={pharmacyCatalog}
              >
                <span>Pharmacy cards</span>
                <span className="flex items-center gap-2">
                  <span className={`min-w-[18px] text-right text-[9px] font-semibold ${pharmacyCatalog ? "text-[#31583f]" : "text-[#929894]"}`}>{pharmacyCatalog ? "On" : "Off"}</span>
                  <span className={`relative h-6 w-11 shrink-0 rounded-full border transition-all duration-200 ${pharmacyCatalog ? "border-[#0b7045] bg-gradient-to-r from-[#183229] to-[#315f4e] shadow-[inset_0_1px_2px_rgba(0,0,0,0.18),0_0_0_2px_rgba(24,50,41,0.06)]" : "border-[#cfd4d1] bg-[#e7eae8]"}`}>
                    <span className={`absolute left-[3px] top-[3px] size-4 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-out ${pharmacyCatalog ? "translate-x-5" : "translate-x-0"}`} />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex h-9 items-center gap-2">
        <button onClick={() => setMenuOpen(current => !current)} className="flex min-w-0 flex-1 items-center gap-2 text-left" aria-expanded={menuOpen} aria-label="Open account menu">
          <span className="min-w-0 flex-1">
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="truncate text-[12px] font-normal text-[#181a19]">Hi, Zee Rabushaj</span>
              <img src={userVerifiedIcon} alt="Verified" className="size-3 shrink-0" />
              <span className="shrink-0 rounded-[7px] bg-[var(--app-menu-bg)] px-1.5 py-0.5 text-[9px] font-normal text-[#5f6662]">User Verified</span>
            </span>
            <span className="mt-0.5 flex items-center gap-1.5">
              <span className="text-[10px] font-normal text-[#7f8783]">NP</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

function HeaderActions({
  onNavigate,
  cartPage = "cart-single",
  favoriteProducts,
  onProductSelect,
}: {
  onNavigate: (p: Page) => void;
  cartPage?: Page;
  favoriteProducts?: CardDef[];
  onProductSelect?: (product: CardDef) => void;
}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const { cartItemCount, cartPreviewItems, updateCartItemQty, removeCartItem, clearCartItems } = useCartSummary();
  const sharedFavorites = useProductFavorites();
  const products = favoriteProducts ?? sharedFavorites.favoriteProducts;
  const favoriteCount = products.length;
  const cartSubtotal = cartPreviewItems.reduce((sum, item) => {
    const unitPrice = Number.parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + (Number.isFinite(unitPrice) ? unitPrice * (item.qty ?? 1) : 0);
  }, 0);

  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <button
          onClick={() => {
            setCartOpen(open => !open);
            setFavoritesOpen(false);
          }}
          className="relative flex items-center gap-1.5 text-[13px] font-medium text-[#1a1a1a] transition-opacity hover:opacity-70"
          aria-expanded={cartOpen}
        >
          <span className="relative">
            <ShoppingCart size={17} strokeWidth={1.5} />
            {cartItemCount > 0 && (
              <span className="absolute -right-2.5 -top-2 flex size-4 items-center justify-center rounded-full bg-[#183229] text-[9px] font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </span>
          Cart
        </button>

        {cartOpen && (
          <div className="absolute right-0 top-8 z-50 w-[340px] overflow-hidden rounded-[6px] border border-[#e8e3df] bg-white shadow-[0_18px_45px_rgba(24,50,41,0.18)]">
            <div className="flex h-12 items-center justify-between border-b border-[#eee8e3] px-4">
              <p className="text-[14px] font-medium text-[#6f7782]">{cartItemCount} product{cartItemCount === 1 ? "" : "s"}</p>
              {cartPreviewItems.length > 0 ? (
                <button onClick={clearCartItems} className="text-[13px] font-semibold text-[#183229] transition-opacity hover:opacity-70">
                  Clear all
                </button>
              ) : (
                <ShoppingCart size={16} className="text-[#183229]" />
              )}
            </div>
            <div className="max-h-[260px] overflow-y-auto px-3 py-2">
              {cartPreviewItems.length > 0 ? (
                cartPreviewItems.map(item => (
                  <div key={`${item.id}-${item.name}`} className="group grid grid-cols-[46px_minmax(0,1fr)_28px] items-start gap-3 rounded-[7px] px-1.5 py-3 transition-colors hover:bg-[var(--app-soft-hover)]">
                    <span className="flex size-11 items-center justify-center overflow-hidden rounded-[8px] bg-[#fbfaf8]">
                      <img src={item.img} alt="" className="h-9 w-10 object-contain mix-blend-multiply" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-semibold text-[#1a1a1a]">{item.name}</span>
                      <span className="mt-1 block truncate text-[12px] text-[#6f7782]">
                        Price per unit: <strong className="font-bold text-[#1a1a1a]">{item.price}</strong>
                      </span>
                      <span className="mt-2 inline-flex h-7 items-center overflow-hidden rounded-full border border-[#d8dfdc] bg-white">
                        <button onClick={() => updateCartItemQty(item.id, -1)} className="flex size-7 items-center justify-center text-[#6f7782] hover:bg-[#eef5f1]" aria-label={`Decrease ${item.name}`}>
                          <Minus size={12} />
                        </button>
                        <span className="flex h-7 min-w-7 items-center justify-center px-1 text-[12px] font-semibold text-[#1a1a1a]">{item.qty ?? 1}</span>
                        <button onClick={() => updateCartItemQty(item.id, 1)} className="flex size-7 items-center justify-center text-[#183229] hover:bg-[#eef5f1]" aria-label={`Increase ${item.name}`}>
                          <Plus size={12} />
                        </button>
                      </span>
                    </span>
                    <button onClick={() => removeCartItem(item.id)} className="flex size-7 items-center justify-center rounded-[6px] text-[#d92d20] opacity-0 transition-all hover:bg-[#fbeaea] group-hover:opacity-100" aria-label={`Remove ${item.name}`}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <ShoppingCart size={22} className="mx-auto text-[#c7cfcb]" />
                  <p className="mt-2 text-[12px] font-semibold text-[#1a1a1a]">Your cart is empty</p>
                  <p className="mt-1 text-[11px] text-[#6f7782]">Add products to see them here.</p>
                </div>
              )}
            </div>
            <div className="border-t border-[#eee8e3] px-3 py-3">
              <button
                onClick={() => {
                  setCartOpen(false);
                  onNavigate(cartPage);
                }}
                className="flex h-10 w-full items-center justify-center rounded-[10px] bg-[#183229] text-[12px] font-bold uppercase tracking-[0.02em] text-white transition-colors hover:bg-[#244438]"
              >
                Go to cart{cartSubtotal > 0 ? ` ($${cartSubtotal.toFixed(2)})` : ""}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => {
            setFavoritesOpen(open => !open);
            setCartOpen(false);
          }}
          className="relative flex items-center gap-1.5 text-[13px] font-medium text-[#1a1a1a] transition-opacity hover:opacity-70"
          aria-expanded={favoritesOpen}
        >
          <span className="relative">
            <Heart size={17} strokeWidth={1.5} />
            {favoriteCount > 0 && (
              <span className="absolute -right-2.5 -top-2 flex size-4 items-center justify-center rounded-full bg-[#183229] text-[9px] font-bold text-white">
                {favoriteCount}
              </span>
            )}
          </span>
          Favorites
        </button>

        {favoritesOpen && (
          <div className="absolute right-0 top-8 z-50 w-[360px] overflow-hidden rounded-[6px] border border-[#e8e3df] bg-white shadow-[0_18px_45px_rgba(24,50,41,0.18)]">
            <div className="flex h-12 items-center justify-between border-b border-[#eee8e3] px-4">
              <p className="text-[14px] font-medium text-[#6f7782]">{favoriteCount} product{favoriteCount === 1 ? "" : "s"}</p>
              <button
                onClick={() => sharedFavorites.setFavoriteProductIds(new Set())}
                className="text-[13px] font-semibold text-[#183229] transition-opacity hover:opacity-70"
              >
                Clear all
              </button>
            </div>

            <div className="max-h-[260px] overflow-y-auto px-3 py-2">
              {products.length > 0 ? (
                products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onProductSelect?.(product);
                      setFavoritesOpen(false);
                      onNavigate("product-detail");
                    }}
                    className="grid w-full grid-cols-[42px_minmax(0,1fr)] items-center gap-3 rounded-[6px] px-1 py-2.5 text-left transition-colors hover:bg-[var(--app-soft-hover)]"
                  >
                    <span className="flex h-8 w-10 items-center justify-center overflow-hidden bg-[#fbfaf8]">
                      <img src={product.img} alt="" className="h-8 w-10 object-contain mix-blend-multiply" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-semibold text-[#1a1a1a]">{product.name}</span>
                      <span className="mt-1 block truncate text-[12px] text-[#6f7782]">
                        Price per unit: <strong className="font-bold text-[#1a1a1a]">{product.price}</strong>
                      </span>
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <Heart size={22} className="mx-auto text-[#c7cfcb]" />
                  <p className="mt-2 text-[12px] font-semibold text-[#1a1a1a]">No favorites yet</p>
                  <p className="mt-1 text-[11px] text-[#6f7782]">Save products from the catalog to see them here.</p>
                </div>
              )}
            </div>

            <div className="border-t border-[#eee8e3] px-3 py-3">
              <button
                onClick={() => {
                  setFavoritesOpen(false);
                  onNavigate("favorites");
                }}
                className="flex h-10 w-full items-center justify-center rounded-[10px] bg-[#183229] text-[12px] font-bold uppercase tracking-[0.02em] text-white transition-colors hover:bg-[#244438]"
              >
                Go to Favorites
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

function Header({
  title,
  breadcrumb,
  onNavigate,
  favoriteProducts = [],
  cartPage = "cart-single",
  onProductSelect,
}: {
  title: string;
  breadcrumb?: string[];
  onNavigate: (p: Page) => void;
  favoriteProducts?: CardDef[];
  cartPage?: Page;
  onProductSelect?: (product: CardDef) => void;
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-[28px] font-semibold text-[#1a1a1a] leading-tight">{title}</h1>
        {breadcrumb && (
          <p className="text-[11px] text-[#4b4b4b] mt-1">
            {breadcrumb.slice(0, -1).map((b) => (
              <span key={b}>
                <button
                  className="hover:underline text-[12px]"
                  onClick={() => onNavigate("products")}
                >
                  {b}
                </button>
                {", "}
              </span>
            ))}
            <span className="text-[#1a1a1a] font-medium">{breadcrumb[breadcrumb.length - 1]}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function VoucherBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);
  if (dismissed) return null;

  function copyVoucher() {
    void navigator.clipboard?.writeText("WELCOME25");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="sticky top-0 z-40 mb-2 rounded-[18px] border border-white/80 bg-[linear-gradient(180deg,rgba(248,249,252,0.92),rgba(239,241,245,0.78))] p-2 pb-1.5 shadow-[0_12px_34px_rgba(25,35,55,0.08)] backdrop-blur-xl">
      <div className="flex items-center gap-3 rounded-[13px] border border-white bg-white/95 px-3 py-2.5 shadow-[0_7px_20px_rgba(30,41,59,0.09)]">
        <span className="flex size-9 shrink-0 items-center justify-center text-[20px] leading-none">
          🎁
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-semibold text-[#171A1F]">Your $25 coupon is ready <span className="font-normal text-[#7B808A]">· Use code WELCOME25 on your next order.</span></p>
        </div>
        <span className="hidden whitespace-nowrap text-[9px] text-[#9297A1] lg:inline-flex">Valid until September 5, 2026 · <strong className="ml-1 font-semibold text-[#2563EB]">Available at checkout</strong></span>
        <button onClick={copyVoucher} className="hidden h-8 min-w-[126px] items-center justify-between gap-3 rounded-[8px] bg-[#F6F4F8] px-3 text-[10px] font-medium text-[#4F5968] transition-colors hover:bg-[#F0EDF3] sm:inline-flex">
          <span>{copied ? "Copied" : "WELCOME25"}</span>{copied ? <CheckCircle2 size={12} className="text-[#2563EB]" /> : <Copy size={12} strokeWidth={1.8} className="text-[#8A96A8]" />}
        </button>
        <button onClick={() => setDismissed(true)} className="flex size-8 shrink-0 items-center justify-center text-[#717680] transition-colors hover:text-[#222]" aria-label="Dismiss voucher"><X size={14} /></button>
      </div>
    </div>
  );
}

// ─── Products (Catalog) ───────────────────────────────────────────────────────

// Lightweight product list for dashboard "Top Products" strip
const ALL_PRODUCTS = [
  { id: 1, name: "NAD+ Injection", price: "$55.88", img: img430 },
  { id: 2, name: "Nandrolone Decanoate", price: "$35.88", img: img429 },
  { id: 3, name: "B-Complex", price: "$45.99", img: img431 },
  { id: 4, name: "MIC/B12", price: "$215.98", img: img432 },
  { id: 5, name: "Esteadol", price: "$65.99", img: img433 },
  { id: 6, name: "Atropine Sulfate", price: "$15.98", img: img434 },
];

// SVG path data (sourced from Figma export)
const HEART_OUTLINE = "M9.60356 0C8.3794 0 7.3076 0.526417 6.6395 1.41623C5.9714 0.526417 4.89959 0 3.67544 0C2.70099 0.00109833 1.76676 0.388683 1.07772 1.07772C0.388683 1.76676 0.00109833 2.70099 0 3.67544C0 7.82512 6.1528 11.184 6.41482 11.3227C6.48388 11.3599 6.56108 11.3793 6.6395 11.3793C6.71792 11.3793 6.79511 11.3599 6.86417 11.3227C7.12619 11.184 13.279 7.82512 13.279 3.67544C13.2779 2.70099 12.8903 1.76676 12.2013 1.07772C11.5122 0.388683 10.578 0.00109833 9.60356 0ZM6.6395 10.3624C5.55702 9.73161 0.948499 6.85824 0.948499 3.67544C0.949441 2.9525 1.23704 2.25944 1.74824 1.74824C2.25944 1.23704 2.9525 0.949441 3.67544 0.948499C4.82846 0.948499 5.79652 1.56265 6.20082 2.54909C6.23655 2.63607 6.29733 2.71047 6.37544 2.76283C6.45355 2.81519 6.54546 2.84314 6.6395 2.84314C6.73353 2.84314 6.82544 2.81519 6.90355 2.76283C6.98166 2.71047 7.04245 2.63607 7.07818 2.54909C7.48247 1.56087 8.45054 0.948499 9.60356 0.948499C10.3265 0.949441 11.0196 1.23704 11.5308 1.74824C12.0419 2.25944 12.3296 2.9525 12.3305 3.67544C12.3305 6.8535 7.72079 9.73101 6.6395 10.3624Z";
const HEART_FILLED = "M15.4077 6.55061C15.4077 11.0445 8.7445 14.682 8.46075 14.8322C8.38596 14.8724 8.30236 14.8935 8.21743 14.8935C8.13251 14.8935 8.04891 14.8724 7.97412 14.8322C7.69037 14.682 1.02722 11.0445 1.02722 6.55061C1.02841 5.49534 1.44814 4.48362 2.19433 3.73743C2.94053 2.99124 3.95224 2.5715 5.00752 2.57031C6.33321 2.57031 7.49392 3.14039 8.21743 4.10401C8.94095 3.14039 10.1017 2.57031 11.4274 2.57031C12.4826 2.5715 13.4943 2.99124 14.2405 3.73743C14.9867 4.48362 15.4065 5.49534 15.4077 6.55061Z";
const RX_ICON = "M15.9802 8.84809C15.9898 8.88727 15.9916 8.92795 15.9855 8.96784C15.9794 9.00772 15.9656 9.046 15.9447 9.08052C15.9238 9.11503 15.8963 9.14509 15.8638 9.16897C15.8313 9.19286 15.7944 9.21011 15.7552 9.21973L14.8092 9.45009L15.0572 10.3757C15.0677 10.4147 15.0703 10.4554 15.0651 10.4954C15.0598 10.5354 15.0467 10.5739 15.0265 10.6089C15.0063 10.6438 14.9795 10.6744 14.9475 10.699C14.9154 10.7235 14.8789 10.7416 14.8399 10.752C14.8141 10.7594 14.7873 10.7636 14.7604 10.7643C14.6929 10.7642 14.6272 10.7419 14.5736 10.7007C14.52 10.6595 14.4815 10.6019 14.464 10.5366L14.1677 9.43089L12.6105 8.53212V10.33L13.442 11.1612C13.4706 11.1898 13.4932 11.2237 13.5087 11.2609C13.5241 11.2982 13.532 11.3382 13.532 11.3785C13.532 11.4189 13.5241 11.4589 13.5087 11.4961C13.4932 11.5334 13.4706 11.5673 13.442 11.5958C13.4135 11.6244 13.3796 11.647 13.3423 11.6625C13.3051 11.6779 13.2651 11.6859 13.2247 11.6859C13.1844 11.6859 13.1444 11.6779 13.1071 11.6625C13.0699 11.647 13.036 11.6244 13.0074 11.5958L12.3033 10.8913L11.5992 11.5958C11.5707 11.6244 11.5368 11.647 11.4995 11.6625C11.4622 11.6779 11.4223 11.6859 11.3819 11.6859C11.3415 11.6859 11.3016 11.6779 11.2643 11.6625C11.227 11.647 11.1931 11.6244 11.1646 11.5958C11.1361 11.5673 11.1134 11.5334 11.098 11.4961C11.0825 11.4589 11.0746 11.4189 11.0746 11.3785C11.0746 11.3382 11.0825 11.2982 11.098 11.2609C11.1134 11.2237 11.1361 11.1898 11.1646 11.1612L11.9962 10.33V8.53212L10.4394 9.43089L10.143 10.5366C10.1255 10.6019 10.0869 10.6596 10.0332 10.7008C9.97958 10.742 9.91383 10.7643 9.8462 10.7643C9.81925 10.7642 9.79241 10.7607 9.76634 10.7539C9.72736 10.7435 9.69082 10.7255 9.6588 10.7009C9.62678 10.6764 9.59991 10.6457 9.57973 10.6108C9.55955 10.5759 9.54646 10.5373 9.54119 10.4973C9.53592 10.4573 9.53859 10.4166 9.54904 10.3776L9.79705 9.45201L8.85106 9.22165C8.77195 9.2022 8.7038 9.15212 8.6616 9.08243C8.61941 9.01273 8.60663 8.92913 8.62608 8.85001C8.64553 8.77089 8.69561 8.70274 8.76531 8.66055C8.835 8.61836 8.91861 8.60558 8.99772 8.62503L10.1284 8.90261L11.689 8L10.1288 7.09931L8.99811 7.37689C8.97412 7.38283 8.94949 7.38579 8.92478 7.38572C8.84968 7.38577 8.77716 7.35831 8.72094 7.30852C8.66471 7.25873 8.62868 7.19006 8.61965 7.11551C8.61062 7.04095 8.62922 6.96567 8.67193 6.9039C8.71464 6.84213 8.77851 6.79815 8.85145 6.78027L9.79744 6.54991L9.54942 5.62235C9.52835 5.54364 9.5394 5.45978 9.58015 5.38922C9.6209 5.31866 9.68801 5.26718 9.76672 5.2461C9.84543 5.22503 9.92929 5.23608 9.99985 5.27683C10.0704 5.31758 10.1219 5.3847 10.143 5.46341L10.4394 6.56911L11.9962 7.46788V5.66996L11.1646 4.83876C11.107 4.78113 11.0746 4.70296 11.0746 4.62146C11.0746 4.5811 11.0825 4.54114 11.098 4.50385C11.1134 4.46657 11.1361 4.43269 11.1646 4.40416C11.1931 4.37562 11.227 4.35298 11.2643 4.33754C11.3016 4.32209 11.3415 4.31415 11.3819 4.31415C11.4634 4.31415 11.5416 4.34652 11.5992 4.40416L12.3033 5.10866L13.0074 4.40416C13.0651 4.34652 13.1432 4.31415 13.2247 4.31415C13.3062 4.31415 13.3844 4.34652 13.442 4.40416C13.4997 4.46179 13.532 4.53995 13.532 4.62146C13.532 4.70296 13.4997 4.78113 13.442 4.83876L12.6105 5.66996V7.46788L14.1673 6.56911L14.4637 5.46341C14.4847 5.3847 14.5362 5.31758 14.6068 5.27683C14.6773 5.23608 14.7612 5.22503 14.8399 5.2461C14.9186 5.26718 14.9857 5.31866 15.0265 5.38922C15.0672 5.45978 15.0783 5.54364 15.0572 5.62235L14.8092 6.54799L15.7552 6.77835C15.8302 6.79436 15.8964 6.83783 15.941 6.90023C15.9855 6.96262 16.0052 7.03942 15.996 7.11553C15.9868 7.19164 15.9495 7.26157 15.8913 7.31157C15.8332 7.36156 15.7585 7.38801 15.6819 7.38572C15.6571 7.38579 15.6325 7.38283 15.6085 7.37689L14.4779 7.09931L12.9176 8L14.4779 8.90069L15.6085 8.62311C15.6477 8.61347 15.6884 8.61165 15.7283 8.61774C15.7682 8.62383 15.8064 8.63772 15.841 8.65861C15.8755 8.67951 15.9055 8.70699 15.9294 8.7395C15.9533 8.77201 15.9705 8.80891 15.9802 8.84809Z";

// Exact Figma product card using stacking CSS grid (col-1 row-1 for all children)
function FigmaCard({
  name,
  strength,
  vialPalette,
  price,
  pharmacies,
  img,
  imgW,
  imgH,
  imgL,
  imgT,
  imgContain,
  favorited,
  onFavorite,
  favoriteLoading = false,
  hasRxBadge,
  btnOffsetX,
  heartVariant,
  onClick,
}: {
  name: string;
  strength?: string;
  vialPalette?: VialPalette;
  price: string;
  pharmacies: number;
  img: string;
  imgW: number;
  imgH: number;
  imgL: number;
  imgT: number;
  imgContain?: boolean;
  favorited: boolean;
  onFavorite: () => void;
  favoriteLoading?: boolean;
  hasRxBadge?: boolean;
  btnOffsetX: number;
  heartVariant: "green" | "black" | "none";
  onClick: () => void;
}) {
  const [pharmacyMenuOpen, setPharmacyMenuOpen] = useState(false);
  const cardPharmacies = ["Altin Compounding Pharmacy", "Emerald Pharmacy SandBox", "Partel Sandbox"];
  const usesManualVial = img === blankVialReference || img === blankLyophilizedVialReference;
  const usesManualPatch = img === blankPatchPackageReference;
  const usesManualCapsule = img === blankCapsuleBottleReference;
  const cardScale = 1.3;
  const productImageStyle = usesManualVial
    ? { marginLeft: 16.5 * cardScale, marginTop: 2 * cardScale, width: 172 * cardScale, height: 215 * cardScale }
    : usesManualPatch
    ? { marginLeft: 27, marginTop: 18, width: 214, height: 214 }
    : usesManualCapsule
    ? { marginLeft: 28, marginTop: 0, width: 212, height: 264 }
    : { marginLeft: imgL * cardScale, marginTop: imgT * cardScale, width: imgW * cardScale, height: imgH * cardScale };

  return (
    <div
      className="relative inline-grid shrink-0 cursor-pointer grid-cols-[max-content] grid-rows-[max-content] place-items-start"
      onClick={onClick}
    >
      <div className="col-1 row-1 h-[393px] w-[268px] rounded-[16px] bg-gradient-to-b from-[rgba(247,239,233,0.1)] to-[rgba(236,229,182,0.1)]" />

      <div className="pointer-events-none col-1 row-1" style={productImageStyle}>
        {usesManualVial ? (
          <ManualVialPreview name={name} strength={strength ?? "20mg/25mg/mL"} size="1 (5mL) Vial" palette={vialPalette} baseImage={img} compact />
        ) : img === blankNasalSprayReference ? (
          <ManualNasalSprayPreview name={name} strength={strength ?? "100mg/mL"} palette={vialPalette} compact />
        ) : img === blankTopicalDropperReference ? (
          <ManualNasalSprayPreview name={name} strength={strength ?? "2%"} palette={vialPalette} baseImage={img} variant="topical" compact />
        ) : img === blankPatchPackageReference ? (
          <ManualPatchPreview name={name} strength={strength ?? "0.1mg/day"} compact />
        ) : img === blankCapsuleBottleReference ? (
          <ManualCapsulePreview name={name} strength={strength ?? "200mg/mL"} palette={vialPalette} compact />
        ) : (
          <img
            alt={name}
            className={`size-full max-w-none ${imgContain ? "object-contain" : "object-cover"}`}
            src={img}
          />
        )}
      </div>

      <div className="col-1 row-1 z-10 flex items-center gap-[5px]" style={{ marginLeft: 15.6, marginTop: 19.5 }}>
        <span className="flex h-[26px] min-w-[36px] items-center justify-center rounded-[8px] bg-[#EAF2FF] px-2 text-[#2563EB]" title="Refrigerated"><Snowflake size={14} strokeWidth={2} /></span>
        {hasRxBadge && <span className="flex size-[26px] items-center justify-center rounded-[8px] bg-[#FFF0F0] text-[13px] font-semibold text-[#D84B4B]" title="Controlled">C</span>}
      </div>

      <div className="col-1 row-1" style={{ marginLeft: 26.8, marginTop: 285.3, width: 223.6 }}>
        <h3 className="truncate text-[18px] font-light leading-[23px] tracking-[-0.36px] text-[#1a1a1a]">{name}</h3>
        <p className="mt-1 text-[15.5px] font-normal leading-[21px] text-[#1a1a1a]">{price}</p>
        <div className="mt-2 flex items-center gap-[6px]">
          <button
            type="button"
            className="relative inline-flex h-[26px] items-center rounded-[4px] bg-[#f8f5f1] px-2.5 text-[13px] font-normal text-[#333]"
            onClick={(event) => { event.stopPropagation(); setPharmacyMenuOpen(current => !current); }}
            aria-expanded={pharmacyMenuOpen}
          >
            {pharmacies > 2 ? `+${pharmacies - 2} Pharmacies` : `${pharmacies} Pharmacies`}
            {pharmacyMenuOpen && (
              <span
                className="absolute bottom-[26px] left-0 z-30 w-[155px] overflow-hidden rounded-[8px] border border-[#e5e5e5] bg-white text-left shadow-[0_7px_18px_rgba(0,0,0,0.10)]"
                onClick={(event) => event.stopPropagation()}
              >
                <span className="block space-y-1 px-3 py-2.5">
                  {cardPharmacies.map((pharmacyName, index) => (
                    <span key={pharmacyName} className="flex items-start gap-2 rounded-[5px] py-1.5">
                      <span className={`mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-[3px] text-[5px] font-semibold ${index === 1 ? "bg-[#e8f1d8] text-[#69833b]" : "bg-white text-[#7357ff]"}`}>
                        {index === 1 ? "E" : "Optimal"}
                      </span>
                      <span className="text-[9px] font-medium leading-[13px] text-[#222]">{pharmacyName}</span>
                    </span>
                  ))}
                </span>
                <span className="block border-t border-[#eeeeee] px-3 py-2 text-[9px] font-medium text-[#222] underline underline-offset-2">3 Pharmacies</span>
              </span>
            )}
          </button>
        </div>
      </div>

      {heartVariant !== "none" && (
        <button
          className="col-1 row-1 z-10 flex size-9 items-center justify-center rounded-full bg-white shadow-[0_3px_8px_rgba(0,0,0,0.04)]"
          style={{ marginLeft: btnOffsetX * cardScale, marginTop: 19.5 }}
          onClick={(e) => { e.stopPropagation(); onFavorite(); }}
          disabled={favoriteLoading}
          aria-busy={favoriteLoading}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          {favoriteLoading ? (
            <Loader2 size={20} className="animate-spin text-[#183229]" />
          ) : favorited || heartVariant === "green" ? (
            <Heart size={21} strokeWidth={1.8} className="fill-[#2563EB] text-[#2563EB]" />
          ) : (
            <Heart size={20} strokeWidth={1.8} className="text-black" />
          )}
        </button>
      )}
    </div>
  );
}

function OldCatalogCard({
  name,
  strength,
  vialPalette,
  price,
  pharmacies,
  img,
  favorited,
  onFavorite,
  favoriteLoading = false,
  heartVariant,
  onClick,
}: {
  name: string;
  strength?: string;
  vialPalette?: VialPalette;
  price: string;
  pharmacies: number;
  img: string;
  favorited: boolean;
  onFavorite: () => void;
  favoriteLoading?: boolean;
  heartVariant: "green" | "black" | "none";
  onClick: () => void;
}) {
  return (
    <article
      onClick={onClick}
      className="relative h-[374px] w-[268px] shrink-0 cursor-pointer overflow-hidden rounded-[16px] bg-gradient-to-b from-[rgba(247,239,233,0.10)] to-[rgba(236,229,182,0.10)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="flex h-[276px] items-center justify-center px-7 pt-5">
        {img === blankVialReference || img === blankLyophilizedVialReference ? (
          <div className="h-[245px] w-[196px]">
            <ManualVialPreview name={name} strength={strength ?? "20mg/25mg/mL"} size="1 (5mL) Vial" palette={vialPalette} baseImage={img} compact flatLabel />
          </div>
        ) : img === blankNasalSprayReference ? (
          <div className="h-[260px] w-[223px]">
            <ManualNasalSprayPreview name={name} strength={strength ?? "100mg/mL"} palette={vialPalette} compact flatLabel />
          </div>
        ) : img === blankTopicalDropperReference ? (
          <div className="h-[245px] w-[196px]">
            <ManualNasalSprayPreview name={name} strength={strength ?? "2%"} palette={vialPalette} baseImage={img} variant="topical" compact flatLabel />
          </div>
        ) : img === blankPatchPackageReference ? (
          <div className="size-[220px]">
            <ManualPatchPreview name={name} strength={strength ?? "0.1mg/day"} compact />
          </div>
        ) : img === blankCapsuleBottleReference ? (
          <div className="h-[255px] w-[205px]">
            <ManualCapsulePreview name={name} strength={strength ?? "200mg/mL"} palette={vialPalette} compact flatLabel />
          </div>
        ) : (
          <img src={img} alt={name} className="max-h-[245px] max-w-[205px] object-contain mix-blend-multiply" />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
        <h3 className="truncate text-[16px] font-medium leading-5 text-[#1a1a1a]">{name}</h3>
        <p className="mt-1 text-[14px] text-[#1a1a1a]">{price}</p>
        <p className="mt-2 text-[12px] text-[#666] underline underline-offset-2">{pharmacies} Pharmacies</p>
      </div>
      {heartVariant !== "none" && (
        <button
          type="button"
          onClick={(event) => { event.stopPropagation(); onFavorite(); }}
          disabled={favoriteLoading}
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          {favoriteLoading ? <Loader2 size={17} className="animate-spin text-[#2563EB]" /> : <Heart size={18} className={favorited || heartVariant === "green" ? "fill-[#2563EB] text-[#2563EB]" : "text-black"} />}
        </button>
      )}
    </article>
  );
}

function PharmacyCatalogCard({
  name,
  strength,
  vialPalette,
  price,
  pharmacy,
  pharmacies,
  dosage,
  img,
  favorited,
  onFavorite,
  heartVariant,
  onClick,
}: {
  name: string;
  strength?: string;
  vialPalette?: VialPalette;
  price: string;
  pharmacy: string;
  pharmacies: number;
  dosage: string;
  img: string;
  favorited: boolean;
  onFavorite: () => void;
  heartVariant: "green" | "black" | "none";
  onClick: () => void;
}) {
  return (
    <article onClick={onClick} className="group relative flex h-[374px] w-[268px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[16px] border border-[#e7e9e7] bg-white transition-colors hover:border-[#cbd2ce]">
      <div className="relative flex h-[230px] items-center justify-center bg-[#f7f8f7] px-7 py-5">
        {img === blankVialReference || img === blankLyophilizedVialReference ? (
          <div className="h-[195px] w-[156px] transition-transform duration-300 group-hover:scale-[1.03]">
            <ManualVialPreview name={name} strength={strength ?? "20mg/25mg/mL"} size="1 (5mL) Vial" palette={vialPalette} baseImage={img} compact />
          </div>
        ) : img === blankNasalSprayReference ? (
          <div className="h-[205px] w-[176px] transition-transform duration-300 group-hover:scale-[1.03]">
            <ManualNasalSprayPreview name={name} strength={strength ?? "100mg/mL"} palette={vialPalette} compact />
          </div>
        ) : img === blankTopicalDropperReference ? (
          <div className="h-[195px] w-[156px] transition-transform duration-300 group-hover:scale-[1.03]">
            <ManualNasalSprayPreview name={name} strength={strength ?? "2%"} palette={vialPalette} baseImage={img} variant="topical" compact />
          </div>
        ) : img === blankPatchPackageReference ? (
          <div className="size-[185px] transition-transform duration-300 group-hover:scale-[1.03]">
            <ManualPatchPreview name={name} strength={strength ?? "0.1mg/day"} compact />
          </div>
        ) : img === blankCapsuleBottleReference ? (
          <div className="h-[205px] w-[165px] transition-transform duration-300 group-hover:scale-[1.03]">
            <ManualCapsulePreview name={name} strength={strength ?? "200mg/mL"} palette={vialPalette} compact />
          </div>
        ) : (
          <img src={img} alt={name} className="max-h-[195px] max-w-[175px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]" />
        )}
        {heartVariant !== "none" && (
          <button type="button" onClick={(event) => { event.stopPropagation(); onFavorite(); }} className="absolute right-3.5 top-3.5 flex size-8 items-center justify-center rounded-full border border-[#e5e8e6] bg-white text-[#1c211e]" aria-label={favorited ? "Remove from favorites" : "Add to favorites"}>
            <Heart size={15} strokeWidth={1.8} className={favorited || heartVariant === "green" ? "fill-[#2563EB] text-[#2563EB]" : ""} />
          </button>
        )}
        <span className="absolute bottom-3 left-3.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-[#5d6561]">{dosage}</span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-4 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-[20px] tracking-[-0.01em] text-[#171a18]">{name}</h3>
          <span className="shrink-0 text-[14px] font-semibold text-[#171a18]">{price}</span>
        </div>
        <div className="mt-auto rounded-[9px] bg-[#f5f7f6] px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-[6px] bg-white text-[#31583f]"><Building2 size={13} strokeWidth={1.7} /></span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold text-[#26302b]">{pharmacy}</p>
              <p className="mt-0.5 text-[9px] text-[#818985]">Available from {pharmacies} pharmacies</p>
            </div>
            <ChevronRight size={13} className="shrink-0 text-[#8a928e]" />
          </div>
        </div>
      </div>
    </article>
  );
}

type VialPalette = {
  start: string;
  middle: string;
  end: string;
  mark: string;
  foreground?: string;
};

// Product definitions matching the Figma dashboard export exactly
type CardDef = {
  id: number;
  name: string;
  price: string;
  pharmacies: number;
  pharmacy: string;
  shippingState: string;
  areaOfTreatment: string;
  dosage: string;
  img: string;
  imgW: number; imgH: number; imgL: number; imgT: number;
  imgContain?: boolean;
  hasRxBadge?: boolean;
  btnOffsetX: number;
  heartVariant: "green" | "black" | "none";
  strength?: string;
  vialPalette?: VialPalette;
};

function injectionArea(name: string) {
  const normalizedName = name.toLowerCase();
  if (["tirzepatide", "semaglutide", "retatrutide", "liraglutide", "aod-9604", "mots-c"].some(term => normalizedName.includes(term))) return "Weight Loss";
  if (["testosterone", "nandrolone", "tri-mix", "bimix", "quadmix", "alprostadil", "papaverine", "dutasteride", "pt-141", "bremelanotide", "pregnyl"].some(term => normalizedName.includes(term))) return "Men's Health";
  if (["bpc", "tb-500", "tb500", "ghk", "cjc", "ipamorelin", "sermorelin", "tesamorelin", "peptide", "epithalon", "foxo", "igf", "kisspeptin", "thymosin", "dsip", "ll-37", "ara 290", "ss31", "peg-mgf"].some(term => normalizedName.includes(term))) return "Peptide Therapy";
  if (["oxytocin", "biotin", "folic acid"].some(term => normalizedName.includes(term))) return "Women's Health";
  return "Wellness";
}

function gradientLabelPalette(catalogNumber: number, offset = 0): VialPalette {
  const hue = (218 + (catalogNumber + offset) * 47) % 360;
  const middleHue = (hue + 7) % 360;
  const endHue = (hue + 14) % 360;
  return {
    start: `hsl(${hue} 56% 25%)`,
    middle: `hsl(${middleHue} 58% 45%)`,
    end: `hsl(${endHue} 72% 68%)`,
    mark: `hsl(${endHue} 76% 73%)`,
    foreground: "#FFFFFF",
  };
}

function injectionPalette(catalogNumber: number): VialPalette {
  return gradientLabelPalette(catalogNumber);
}

function nasalSprayPalette(catalogNumber: number): VialPalette {
  return gradientLabelPalette(catalogNumber, 6);
}

function lyophilizedPalette(catalogNumber: number): VialPalette {
  return gradientLabelPalette(catalogNumber, 12);
}

function topicalPalette(catalogNumber: number): VialPalette {
  return gradientLabelPalette(catalogNumber, 18);
}

function capsulePalette(): VialPalette {
  return {
    start: "#581C3B",
    middle: "#7D2D59",
    end: "#B690C8",
    mark: "#B690C8",
    foreground: "#F2C15A",
  };
}

const INJECTION_CARDS: CardDef[] = INJECTION_PRODUCT_SEEDS.map((product, index) => ({
  id: 1000 + product.catalogNumber,
  name: product.name,
  strength: product.strength,
  price: "$35.88",
  pharmacies: 2 + (index % 4),
  pharmacy: ["1st Choice Compounding Pharmacy", "Optimal Balance Pharmacy", "DCA Pharmacy", "Thesis Pharmacy"][index % 4],
  shippingState: ["Florida", "New York", "Texas"][index % 3],
  areaOfTreatment: injectionArea(product.name),
  dosage: "Injection",
  img: blankVialReference,
  imgW: 145,
  imgH: 181,
  imgL: 30,
  imgT: 17,
  imgContain: true,
  btnOffsetX: 168,
  heartVariant: "black" as const,
  vialPalette: injectionPalette(product.catalogNumber),
}));

const NASAL_SPRAY_CARDS: CardDef[] = NASAL_SPRAY_PRODUCT_SEEDS.map((product, index) => ({
  id: 2000 + product.catalogNumber,
  name: product.name,
  strength: product.strength,
  price: "$35.88",
  pharmacies: 2 + (index % 4),
  pharmacy: ["1st Choice Compounding Pharmacy", "Optimal Balance Pharmacy", "DCA Pharmacy", "Thesis Pharmacy"][index % 4],
  shippingState: ["Florida", "New York", "Texas"][index % 3],
  areaOfTreatment: injectionArea(product.name),
  dosage: "Nasal Spray",
  img: blankNasalSprayReference,
  imgW: 210,
  imgH: 255,
  imgL: 29,
  imgT: 1,
  imgContain: true,
  btnOffsetX: 168,
  heartVariant: "black",
  vialPalette: nasalSprayPalette(product.catalogNumber),
}));

const LYOPHILIZED_CARDS: CardDef[] = LYOPHILIZED_PRODUCT_SEEDS.map((product, index) => ({
  id: 3000 + product.catalogNumber,
  name: product.name,
  strength: product.strength,
  price: "$35.88",
  pharmacies: 2 + (index % 4),
  pharmacy: ["1st Choice Compounding Pharmacy", "Optimal Balance Pharmacy", "DCA Pharmacy", "Thesis Pharmacy"][index % 4],
  shippingState: ["Florida", "New York", "Texas"][index % 3],
  areaOfTreatment: injectionArea(product.name),
  dosage: "Lyophilized",
  img: blankLyophilizedVialReference,
  imgW: 145,
  imgH: 181,
  imgL: 30,
  imgT: 17,
  imgContain: true,
  btnOffsetX: 168,
  heartVariant: "black",
  vialPalette: lyophilizedPalette(product.catalogNumber),
}));

const TOPICAL_CARDS: CardDef[] = TOPICAL_PRODUCT_SEEDS.map((product, index) => ({
  id: 4000 + product.catalogNumber,
  name: product.name,
  strength: product.strength,
  price: "$35.88",
  pharmacies: 2 + (index % 4),
  pharmacy: ["1st Choice Compounding Pharmacy", "Optimal Balance Pharmacy", "DCA Pharmacy", "Thesis Pharmacy"][index % 4],
  shippingState: ["Florida", "New York", "Texas"][index % 3],
  areaOfTreatment: injectionArea(product.name),
  dosage: "Topical",
  img: blankTopicalDropperReference,
  imgW: 172,
  imgH: 215,
  imgL: 16.5,
  imgT: 2,
  imgContain: true,
  btnOffsetX: 168,
  heartVariant: "black" as const,
  vialPalette: topicalPalette(product.catalogNumber),
}));

const PATCH_CARDS: CardDef[] = PATCH_PRODUCT_SEEDS.map((product, index) => ({
  id: 5000 + product.catalogNumber,
  name: product.name,
  strength: product.strength,
  price: "$35.88",
  pharmacies: 2 + (index % 4),
  pharmacy: ["1st Choice Compounding Pharmacy", "Optimal Balance Pharmacy", "DCA Pharmacy", "Thesis Pharmacy"][index % 4],
  shippingState: ["Florida", "New York", "Texas"][index % 3],
  areaOfTreatment: "Women's Health",
  dosage: "Patch",
  img: blankPatchPackageReference,
  imgW: 172,
  imgH: 215,
  imgL: 16.5,
  imgT: 2,
  imgContain: true,
  btnOffsetX: 168,
  heartVariant: "black" as const,
}));

const CAPSULE_CARDS: CardDef[] = CAPSULE_PRODUCT_SEEDS.map((product, index) => ({
  id: 6000 + product.catalogNumber,
  name: product.name,
  strength: product.strength,
  price: "$35.88",
  pharmacies: 2 + (index % 4),
  pharmacy: ["1st Choice Compounding Pharmacy", "Optimal Balance Pharmacy", "DCA Pharmacy", "Thesis Pharmacy"][index % 4],
  shippingState: ["Florida", "New York", "Texas"][index % 3],
  areaOfTreatment: injectionArea(product.name),
  dosage: "Capsule",
  img: blankCapsuleBottleReference,
  imgW: 172,
  imgH: 215,
  imgL: 16.5,
  imgT: 2,
  imgContain: true,
  btnOffsetX: 168,
  heartVariant: "black" as const,
  vialPalette: capsulePalette(),
}));

const POPULAR_CARDS: CardDef[] = INJECTION_CARDS.slice(0, 8);

const ALL_CARDS: CardDef[] = [...INJECTION_CARDS, ...NASAL_SPRAY_CARDS, ...LYOPHILIZED_CARDS, ...TOPICAL_CARDS, ...PATCH_CARDS, ...CAPSULE_CARDS];

const PHARMACIES_MULTI = [
  { name: "All Pharmacies", count: 200 },
  { name: "1st Choice Compounding Pharmacy", count: 37 },
  { name: "Optimal Balance Pharmacy", count: 59 },
  { name: "DCA Pharmacy", count: 51 },
  { name: "Thesis Pharmacy", count: 53 },
  { name: "Rush Pharmacy TX", count: 20 },
  { name: "Spring Creek Pharmacy", count: 3 },
];

function MultiPatientPanel({ activePharmacy, onSelect }: { activePharmacy: string; onSelect: (name: string) => void }) {

  return (
    <div className="mb-5">
      {/* Warning banner */}
      <div className="flex items-start gap-3 bg-[#fffbeb] border border-[#fde68a] rounded-[10px] px-4 py-3 mb-4">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
          <path d="M8 1.5L14.5 13H1.5L8 1.5Z" stroke="#d97706" strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M8 6V9" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round"/>
          <circle cx="8" cy="11" r="0.6" fill="#d97706"/>
        </svg>
        <div>
          <p className="text-[12px] font-semibold text-[#92400e] mb-0.5">Multi-Patient Orders!</p>
          <p className="text-[11px] text-[#92400e]/80 leading-relaxed">
            Items in this catalog are available for group purchasing. Order medications for multiple patients from the same pharmacy and have them shipped directly to your clinic.
          </p>
        </div>
      </div>

      {/* Pharmacy filter row */}
      <p className="text-[10px] font-semibold text-[#9d9d9d] tracking-widest uppercase mb-2.5">
        Pharmacies ({PHARMACIES_MULTI.length - 1})
      </p>
      <div className="flex flex-wrap gap-2">
        {PHARMACIES_MULTI.map((ph) => {
          const isActive = activePharmacy === ph.name;
          return (
            <button
              key={ph.name}
              onClick={() => onSelect(ph.name)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12px] font-medium transition-all ${
                isActive
                  ? "border-2 border-[#183229] bg-white text-[#183229]"
                  : "border-[#e0e0e0] bg-white text-[#1a1a1a] hover:border-[#183229]/40"
              }`}
            >
              {ph.name}
              <span className={`text-[11px] font-semibold ${isActive ? "text-[#183229]" : "text-[#9d9d9d]"}`}>
                {ph.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FavoritesPage({
  onNavigate,
  cartPage,
  onProductSelect,
}: {
  onNavigate: (p: Page) => void;
  cartPage: Page;
  onProductSelect: (product: CardDef) => void;
}) {
  const { favoriteProducts, setFavoriteProductIds } = useProductFavorites();
  const { addCartItems } = useCartSummary();
  const { runWithAppLoader, showToast } = useAppLoading();

  function removeFavorite(id: number) {
    setFavoriteProductIds(current => {
      const next = new Set(current);
      next.delete(id);
      return next;
    });
  }

  function addFavoriteProductToCart(product: CardDef) {
    runWithAppLoader(() => {
      addCartItems(1, {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        qty: 1,
      });
      showToast("Product added to cart");
    });
  }

  return (
    <>
      <Header title="Favorites" onNavigate={onNavigate} cartPage={cartPage} onProductSelect={onProductSelect} />

      <section>
        <div className="flex justify-end pb-3">
          <button
            onClick={() => setFavoriteProductIds(new Set())}
            className="inline-flex h-9 items-center gap-2 rounded-[7px] px-3 text-[12px] font-semibold uppercase tracking-[0.02em] text-[#183229] transition-colors hover:bg-[#f6f4f5]"
          >
            Clear all <Trash2 size={15} />
          </button>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className="flex flex-wrap gap-5">
            {favoriteProducts.map(product => (
              <article key={product.id} className="relative w-[268px]">
                <FigmaCard
                  name={product.name}
                  strength={product.strength}
                  vialPalette={product.vialPalette}
                  price={product.price}
                  pharmacies={product.pharmacies}
                  img={product.img}
                  imgW={product.imgW}
                  imgH={product.imgH}
                  imgL={product.imgL}
                  imgT={product.imgT}
                  imgContain={product.imgContain}
                  favorited={true}
                  onFavorite={() => removeFavorite(product.id)}
                  hasRxBadge={product.hasRxBadge}
                  btnOffsetX={product.btnOffsetX}
                  heartVariant={product.heartVariant === "none" ? "black" : "green"}
                  onClick={() => {
                    onProductSelect(product);
                    onNavigate("product-detail");
                  }}
                />
                <div className="absolute bottom-3 left-5 right-5 z-20 grid grid-cols-[minmax(0,1fr)_34px] gap-2">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      addFavoriteProductToCart(product);
                    }}
                    className="flex h-8 items-center justify-center rounded-[10px] bg-white px-3 text-[10px] font-bold uppercase tracking-[0.02em] text-[#183229] transition-colors hover:bg-[#eef5f1]"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      removeFavorite(product.id);
                    }}
                    className="flex h-8 items-center justify-center rounded-[10px] bg-white text-[#183229] transition-colors hover:bg-[#fbeaea] hover:text-[#d92d20]"
                    aria-label={`Remove ${product.name}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
            <Heart size={28} className="text-[#c7cfcb]" />
            <p className="mt-3 text-[15px] font-semibold text-[#1a1a1a]">No favorite products yet</p>
            <p className="mt-1 max-w-[320px] text-[12px] text-[#6f7782]">Favorite products from the catalog and they will appear here.</p>
            <button onClick={() => onNavigate("products")} className="mt-5 h-10 rounded-[10px] bg-[#183229] px-4 text-[12px] font-semibold text-white">
              Browse catalog
            </button>
          </div>
        )}
      </section>
    </>
  );
}

function ProductsPage({
  onNavigate,
  cartMode,
  setCartMode,
  onProductSelect,
  oldCatalog,
  pharmacyCatalog,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  onProductSelect: (product: CardDef) => void;
  oldCatalog: boolean;
  pharmacyCatalog: boolean;
}) {
  const { favoriteProductIds, setFavoriteProductIds, favoriteProducts } = useProductFavorites();
  const [search, setSearch] = useState("");
  const [activePharmacy, setActivePharmacy] = useState("All Pharmacies");
  const [shippingStates, setShippingStates] = useState<string[]>([]);
  const [areasOfTreatment, setAreasOfTreatment] = useState<string[]>([]);
  const [dosages, setDosages] = useState<string[]>([]);
  const [openCatalogFilter, setOpenCatalogFilter] = useState<string | null>(null);
  const [catalogFilterSearch, setCatalogFilterSearch] = useState<Record<string, string>>({});
  const { runWithAppLoader, showToast } = useAppLoading();
  const searchRef = useRef<HTMLInputElement>(null);
  const catalogFiltersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "f") {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!openCatalogFilter) return;

    function closeFilterOnOutsideClick(event: MouseEvent | TouchEvent) {
      if (!catalogFiltersRef.current?.contains(event.target as Node)) {
        setOpenCatalogFilter(null);
      }
    }

    document.addEventListener("mousedown", closeFilterOnOutsideClick);
    document.addEventListener("touchstart", closeFilterOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeFilterOnOutsideClick);
      document.removeEventListener("touchstart", closeFilterOnOutsideClick);
    };
  }, [openCatalogFilter]);

  function toggleFav(id: number) {
    const willFavorite = !favoriteProductIds.has(id);
    runWithAppLoader(() => {
      setFavoriteProductIds((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
      showToast(willFavorite ? "Product added to favorites" : "Product removed from favorites");
    });
  }

  function renderCard(card: CardDef) {
    const fav = favoriteProductIds.has(card.id);
    const heart: "green" | "black" | "none" =
      card.heartVariant === "none" ? "none" : fav ? "green" : "black";
    if (pharmacyCatalog) {
      return (
        <PharmacyCatalogCard
          key={card.id}
          name={card.name}
          strength={card.strength}
          vialPalette={card.vialPalette}
          price={card.price}
          pharmacy={card.pharmacy}
          pharmacies={card.pharmacies}
          dosage={card.dosage}
          img={card.img}
          favorited={fav}
          onFavorite={() => toggleFav(card.id)}
          heartVariant={heart}
          onClick={() => {
            onProductSelect(card);
            onNavigate("product-detail");
          }}
        />
      );
    }
    if (oldCatalog) {
      return (
        <OldCatalogCard
          key={card.id}
          name={card.name}
          strength={card.strength}
          vialPalette={card.vialPalette}
          price={card.price}
          pharmacies={card.pharmacies}
          img={card.img}
          favorited={fav}
          onFavorite={() => toggleFav(card.id)}
          heartVariant={heart}
          onClick={() => {
            onProductSelect(card);
            onNavigate("product-detail");
          }}
        />
      );
    }
    return (
      <FigmaCard
        key={card.id}
        name={card.name}
        strength={card.strength}
        vialPalette={card.vialPalette}
        price={card.price}
        pharmacies={card.pharmacies}
        img={card.img}
        imgW={card.imgW}
        imgH={card.imgH}
        imgL={card.imgL}
        imgT={card.imgT}
        imgContain={card.imgContain}
        favorited={fav}
        onFavorite={() => toggleFav(card.id)}
        hasRxBadge={card.hasRxBadge}
        btnOffsetX={card.btnOffsetX}
        heartVariant={heart}
        onClick={() => {
          onProductSelect(card);
          onNavigate("product-detail");
        }}
      />
    );
  }

  function matchesCatalogFilters(card: CardDef) {
    return (shippingStates.length === 0 || shippingStates.includes(card.shippingState))
      && (areasOfTreatment.length === 0 || areasOfTreatment.includes(card.areaOfTreatment))
      && (dosages.length === 0 || dosages.includes(card.dosage));
  }

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  ];
  const dosageCounts: Record<string, number> = {
    Bottle: 6,
    Enema: 2,
    Capsule: CAPSULE_CARDS.length,
    Injection: INJECTION_CARDS.length,
    "Nasal Spray": NASAL_SPRAY_CARDS.length,
    Lyophilized: LYOPHILIZED_CARDS.length,
    Topical: TOPICAL_CARDS.length,
    Patch: PATCH_CARDS.length,
    Gel: 6,
    Lollipop: 2,
    "Iv Bag": 1,
    Jar: 6,
    "Iv Bag 15": 15,
    Jan: 6,
  };
  const dosageOptions = ["Bottle", "Enema", "Capsule", "Injection", "Nasal Spray", "Lyophilized", "Topical", "Patch", "Gel", "Lollipop", "Iv Bag", "Jar", "Iv Bag 15", "Jan"];
  const areaCounts = ALL_CARDS.reduce<Record<string, number>>((counts, card) => {
    counts[card.areaOfTreatment] = (counts[card.areaOfTreatment] ?? 0) + 1;
    return counts;
  }, {});
  const areaOptions = ["Women's Health", "Men's Health", "Wellness", "Weight Loss", "Peptide Therapy", "Hormone Support"];

  const catalogFilters = [
    { label: "Shipping State", values: shippingStates, setValues: setShippingStates, options: usStates },
    { label: "Area of Treatment", values: areasOfTreatment, setValues: setAreasOfTreatment, options: areaOptions },
    { label: "Dosage", values: dosages, setValues: setDosages, options: dosageOptions },
  ];
  const selectedCatalogFilterCount = catalogFilters.reduce((count, filter) => count + filter.values.length, 0);
  const clearCatalogFilters = () => {
    setShippingStates([]);
    setAreasOfTreatment([]);
    setDosages([]);
    setActivePharmacy("All Pharmacies");
  };

  return (
    <>
      {/* Page header — matches Figma layout */}
      <div className="flex items-start justify-between mb-0">
        <h1 className="font-['Inter',sans-serif] font-medium text-[32px] text-black leading-none">Products</h1>
        <div className="flex items-center gap-5 whitespace-nowrap rounded-[11px] bg-[#F8F8FA] px-4 py-2.5">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A505A]"><span className="flex size-6 items-center justify-center rounded-full bg-[#EEF4FF] text-[#2563EB]"><Snowflake size={13} strokeWidth={2} /></span> Refrigerated</span>
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A505A]"><span className="flex size-6 items-center justify-center rounded-full bg-[#FFF0F0] text-[11px] font-semibold text-[#D84B4B]">C</span> Controlled</span>
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A505A]"><span className="flex size-6 items-center justify-center rounded-full bg-[#EEF4FF]"><Heart size={13} className="fill-[#2563EB] text-[#2563EB]" /></span> Favorite</span>
        </div>
      </div>

      {/* Search + filters bar */}
      <div className="sticky top-0 z-30 -mx-2 mb-5 flex items-end gap-[14px] border-b border-[#eeeeec] bg-white/95 px-2 py-3 backdrop-blur-sm">
        {/* Search box — from Figma import Group1216401138 */}
        <div className="group w-[220px] flex-shrink-0 transition-all duration-300 ease-out focus-within:w-[310px]">
        <div className="flex h-[38px] items-center gap-2 rounded-[9px] border border-[#cfcfcf] bg-white px-3 transition-all duration-300 ease-out focus-within:border-2 focus-within:border-black">
          {/* Magnifier icon — pce98200 */}
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 transition-transform duration-300 group-focus-within:scale-110">
            <path d="M16.1489 15.3529L12.6283 11.8331C13.6487 10.608 14.1575 9.03675 14.0489 7.4461C13.9403 5.85545 13.2227 4.3679 12.0452 3.2929C10.8678 2.21791 9.32127 1.63823 7.72733 1.67445C6.13339 1.71068 4.61477 2.36002 3.4874 3.4874C2.36002 4.61477 1.71068 6.13339 1.67445 7.72733C1.63823 9.32127 2.21791 10.8678 3.2929 12.0452C4.3679 13.2227 5.85545 13.9403 7.4461 14.0489C9.03675 14.1575 10.608 13.6487 11.8331 12.6283L15.3529 16.1489C15.4052 16.2011 15.4672 16.2426 15.5355 16.2709C15.6038 16.2991 15.677 16.3137 15.7509 16.3137C15.8248 16.3137 15.898 16.2991 15.9663 16.2709C16.0346 16.2426 16.0966 16.2011 16.1489 16.1489C16.2011 16.0966 16.2426 16.0346 16.2709 15.9663C16.2991 15.898 16.3137 15.8248 16.3137 15.7509C16.3137 15.677 16.2991 15.6038 16.2709 15.5355C16.2426 15.4672 16.2011 15.4052 16.1489 15.3529ZM2.81339 7.87589C2.81339 6.87462 3.1103 5.89584 3.66658 5.06332C4.22285 4.23079 5.01351 3.58192 5.93856 3.19875C6.86361 2.81558 7.88151 2.71533 8.86354 2.91067C9.84557 3.10601 10.7476 3.58816 11.4556 4.29616C12.1636 5.00417 12.6458 5.90622 12.8411 6.88825C13.0365 7.87028 12.9362 8.88818 12.553 9.81323C12.1699 10.7383 11.521 11.5289 10.6885 12.0852C9.85594 12.6415 8.87716 12.9384 7.87589 12.9384C6.53369 12.9369 5.24689 12.4031 4.29781 11.454C3.34873 10.5049 2.81488 9.21809 2.81339 7.87589Z" fill="#686868"/>
          </svg>
          <input
            ref={searchRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stock or Orders"
            className="flex-1 text-[11px] font-medium font-['Inter',sans-serif] text-black bg-transparent outline-none placeholder:text-[#686868] placeholder:font-medium"
          />
          <div className="flex items-center gap-1 flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M11.25 9H10V7H11.25C11.695 7 12.13 6.86804 12.5 6.62081C12.87 6.37357 13.1584 6.02217 13.3287 5.61104C13.499 5.19991 13.5436 4.74751 13.4568 4.31105C13.37 3.87459 13.1557 3.47368 12.841 3.15901C12.5263 2.84434 12.1254 2.63005 11.689 2.54323C11.2525 2.45642 10.8001 2.50097 10.389 2.67127C9.97783 2.84157 9.62643 3.12996 9.3792 3.49997C9.13196 3.86998 9 4.30499 9 4.75V6H7V4.75C7 4.30499 6.86804 3.86998 6.62081 3.49997C6.37357 3.12996 6.02217 2.84157 5.61104 2.67127C5.19991 2.50097 4.74751 2.45642 4.31105 2.54323C3.87459 2.63005 3.47368 2.84434 3.15901 3.15901C2.84434 3.47368 2.63005 3.87459 2.54323 4.31105C2.45642 4.74751 2.50097 5.19991 2.67127 5.61104C2.84157 6.02217 3.12996 6.37357 3.49997 6.62081C3.86998 6.86804 4.30499 7 4.75 7H6V9H4.75C4.30499 9 3.86998 9.13196 3.49997 9.3792C3.12996 9.62643 2.84157 9.97783 2.67127 10.389C2.50097 10.8001 2.45642 11.2525 2.54323 11.689C2.63005 12.1254 2.84434 12.5263 3.15901 12.841C3.47368 13.1557 3.87459 13.37 4.31105 13.4568C4.74751 13.5436 5.19991 13.499 5.61104 13.3287C6.02217 13.1584 6.37357 12.87 6.62081 12.5C6.86804 12.13 7 11.695 7 11.25V10H9V11.25C9 11.695 9.13196 12.13 9.3792 12.5C9.62643 12.87 9.97783 13.1584 10.389 13.3287C10.8001 13.499 11.2525 13.5436 11.689 13.4568C12.1254 13.37 12.5263 13.1557 12.841 12.841C13.1557 12.5263 13.37 12.1254 13.4568 11.689C13.5436 11.2525 13.499 10.8001 13.3287 10.389C13.1584 9.97783 12.87 9.62643 12.5 9.3792C12.13 9.13196 11.695 9 11.25 9ZM10 4.75C10 4.50277 10.0733 4.2611 10.2107 4.05554C10.348 3.84998 10.5432 3.68976 10.7716 3.59515C11.0001 3.50054 11.2514 3.47579 11.4939 3.52402C11.7363 3.57225 11.9591 3.6913 12.1339 3.86612C12.3087 4.04093 12.4278 4.26366 12.476 4.50614C12.5242 4.74861 12.4995 4.99995 12.4049 5.22836C12.3102 5.45676 12.15 5.65199 11.9445 5.78934C11.7389 5.92669 11.4972 6 11.25 6H10V4.75ZM3.5 4.75C3.5 4.41848 3.6317 4.10054 3.86612 3.86612C4.10054 3.6317 4.41848 3.5 4.75 3.5C5.08152 3.5 5.39946 3.6317 5.63388 3.86612C5.86831 4.10054 6 4.41848 6 4.75V6H4.75C4.41848 6 4.10054 5.86831 3.86612 5.63388C3.6317 5.39946 3.5 5.08152 3.5 4.75ZM6 11.25C6 11.4972 5.92669 11.7389 5.78934 11.9445C5.65199 12.15 5.45676 12.3102 5.22836 12.4049C4.99995 12.4995 4.74861 12.5242 4.50614 12.476C4.26366 12.4278 4.04093 12.3087 3.86612 12.1339C3.6913 11.9591 3.57225 11.7363 3.52402 11.4939C3.47579 11.2514 3.50054 11.0001 3.59515 10.7716C3.68976 10.5432 3.84998 10.348 4.05554 10.2107C4.2611 10.0733 4.50277 10 4.75 10H6V11.25ZM7 7H9V9H7V7ZM11.25 12.5C10.9185 12.5 10.6005 12.3683 10.3661 12.1339C10.1317 11.8995 10 11.5815 10 11.25V10H11.25C11.5815 10 11.8995 10.1317 12.1339 10.3661C12.3683 10.6005 12.5 10.9185 12.5 11.25C12.5 11.5815 12.3683 11.8995 12.1339 12.1339C11.8995 12.3683 11.5815 12.5 11.25 12.5Z" fill="#686868"/>
            </svg>
            <span className="text-[12px] text-[#686868] font-['Inter',sans-serif] font-normal">+ F</span>
          </div>
        </div>
        </div>

        {/* Filters */}
        <div ref={catalogFiltersRef} className="ml-auto flex items-end gap-3">
          {catalogFilters.map(({ label, values, setValues, options }) => {
            const isOpen = openCatalogFilter === label;
            const hasSelection = values.length > 0;
            const isShippingState = label === "Shipping State";
            const isDosage = label === "Dosage";
            const isAreaOfTreatment = label === "Area of Treatment";
            const isCountCheckboxFilter = isDosage || isAreaOfTreatment;
            const buttonLabel = isShippingState && hasSelection ? values[0] : label;
            const filterWidthClass = isShippingState ? "w-[142px]" : isAreaOfTreatment ? "w-[165px]" : "w-[94px]";
            return (
              <div key={label} className="relative flex flex-col gap-1.5">
                <span className="px-0.5 text-[10px] font-semibold leading-none text-[#667085]">
                  {label}
                </span>
                <button
                  onClick={() => setOpenCatalogFilter(isOpen ? null : label)}
                  className={`flex h-[34px] ${filterWidthClass} cursor-pointer items-center justify-between gap-2 rounded-[5px] border bg-white px-2.5 text-[13px] font-semibold leading-none shadow-[0_1px_2px_rgba(16,24,40,0.08)] transition-colors ${
                    hasSelection
                      ? isShippingState
                        ? "border-[#9DBBFF] bg-[#F3F7FF] text-[#2563EB]"
                        : "border-[#cfd8d4] text-[#344054]"
                      : "border-[#d8dee8] text-[#344054] hover:border-[#c7d0dc]"
                  }`}
                >
                  <span className="min-w-0 truncate">{buttonLabel}</span>
                  <ChevronsUpDown size={14} strokeWidth={1.8} className={isShippingState && hasSelection ? "text-[#2563EB]" : "text-[#344054]"} />
                </button>

                {isOpen && (
                  <div className={`absolute top-[52px] z-20 overflow-hidden rounded-[6px] border border-[#d7dee8] bg-white shadow-[0_18px_40px_rgba(16,24,40,0.16)] ${
                    isDosage ? "right-0 w-[180px]" : isAreaOfTreatment ? "left-0 w-[220px]" : "left-0 w-[240px]"
                  }`}>
                    <div className="border-b border-[#e7ebf0] p-2">
                      <div className="flex h-[34px] items-center gap-2 rounded-[5px] border border-[#cfd8e3] bg-white px-2">
                        <Search size={15} strokeWidth={1.9} className="text-[#344054]" />
                        <input
                          value={catalogFilterSearch[label] ?? ""}
                          onChange={(e) => setCatalogFilterSearch(prev => ({ ...prev, [label]: e.target.value }))}
                          autoFocus
                          className="h-full min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#344054] outline-none placeholder:text-[#98a2b3]"
                        />
                      </div>
                    </div>
                    <div className="max-h-[330px] overflow-y-auto py-1">
                      {options
                        .filter(option => option.toLowerCase().includes((catalogFilterSearch[label] ?? "").toLowerCase()))
                        .map(option => {
                        const checked = values.includes(option);
                        if (isCountCheckboxFilter) {
                          const count = isDosage ? (dosageCounts[option] ?? 0) : (areaCounts[option] ?? 0);
                          const displayOption = option === "Iv Bag 15" ? "Iv Bag" : option;
                          return (
                            <label
                              key={option}
                              className="flex cursor-pointer items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#344054] transition-colors hover:bg-[#f6f8fa]"
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => {
                                  setValues(prev => (
                                    prev.includes(option)
                                      ? prev.filter(value => value !== option)
                                      : [...prev, option]
                                  ));
                                }}
                                className="size-3.5 rounded border-[#a8afb8] accent-[#344054]"
                              />
                              <span>{displayOption} ({count})</span>
                            </label>
                          );
                        }
                        return (
                          <button
                            key={option}
                            onClick={() => {
                              if (isShippingState) {
                                setValues([option]);
                                setOpenCatalogFilter(null);
                                return;
                              }
                              setValues(prev => (
                                prev.includes(option)
                                  ? prev.filter(value => value !== option)
                                  : [...prev, option]
                              ));
                            }}
                            className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-[13px] font-medium text-[#344054] transition-colors hover:bg-[#f6f8fa]"
                          >
                            <span className="flex-1">{option}</span>
                            {checked && <CheckCircle2 size={14} strokeWidth={2.4} className="fill-[#475467] text-white" />}
                          </button>
                        );
                      })}
                      {options.filter(option => option.toLowerCase().includes((catalogFilterSearch[label] ?? "").toLowerCase())).length === 0 && (
                        <div className="px-4 py-3 text-[13px] font-medium text-[#98a2b3]">No results</div>
                      )}
                    </div>
                    {hasSelection && (
                      <button
                        onClick={() => setValues([])}
                        className="w-full cursor-pointer border-t border-[#e7ebf0] px-4 py-2.5 text-left text-[12px] font-semibold text-[#667085] transition-colors hover:bg-[#f6f8fa] hover:text-[#183229]"
                      >
                        Clear {label}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        {PHARMACIES_MULTI.map(pharmacy => {
          const isActive = activePharmacy === pharmacy.name;
          return (
            <button
              key={pharmacy.name}
              onClick={() => setActivePharmacy(pharmacy.name)}
              className={`flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium transition-colors ${isActive ? "border-2 border-[#2563EB] text-[#2563EB]" : "border-[0.5px] border-black text-[#1a1a1a] hover:border-[#2563EB]"}`}
            >
              {pharmacy.name}
              <span className={`text-[11px] font-semibold ${isActive ? "text-[#2563EB]" : "text-[#9d9d9d]"}`}>{pharmacy.count}</span>
            </button>
          );
        })}
      </div>

      {selectedCatalogFilterCount > 0 && (
        <div className="-mt-2 mb-5 flex flex-wrap items-center gap-2">
          {catalogFilters.flatMap(({ label, values, setValues }) => (
            values.map(value => (
              <button
                key={`${label}-${value}`}
                onClick={() => setValues(prev => prev.filter(item => item !== value))}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#9DBBFF] bg-[#F3F7FF] px-3 py-1.5 text-[12px] font-medium text-[#2563EB] transition-colors hover:border-[#2563EB]"
              >
                <span className="text-[#4F6FAF]">{label}:</span>
                {value}
                <XCircle size={13} strokeWidth={1.8} />
              </button>
            ))
          ))}
          <button
            onClick={clearCatalogFilters}
            className="cursor-pointer text-[12px] font-medium text-[#667085] transition-colors hover:text-[#183229]"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Popular Products */}
      {(() => {
        const q = search.toLowerCase();
        const filtered = POPULAR_CARDS.filter(c => {
          const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.price.toLowerCase().includes(q);
          const matchesPharmacy = activePharmacy === "All Pharmacies" || c.pharmacy === activePharmacy;
          return matchesSearch && matchesPharmacy && matchesCatalogFilters(c);
        });
        if (filtered.length === 0) return null;
        return (
          <section className="mb-6">
            <h2 className="font-['Inter',sans-serif] font-medium text-black text-[18px] mb-4 leading-none">Popular Products</h2>
            <div className="grid justify-items-start gap-[13px] [grid-template-columns:repeat(auto-fit,268px)]">
              {filtered.map(renderCard)}
            </div>
          </section>
        );
      })()}

      {/* All Products */}
      {(() => {
        const q = search.toLowerCase();
        const filtered = ALL_CARDS.filter(c => {
          const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.price.toLowerCase().includes(q);
          const matchesPharmacy = activePharmacy === "All Pharmacies" || c.pharmacy === activePharmacy;
          return matchesSearch && matchesPharmacy && matchesCatalogFilters(c);
        });
        return (
          <section>
            <h2 className="font-['Inter',sans-serif] font-medium text-black text-[18px] mb-4 leading-none">
              {search ? `Results for "${search}"` : "All Products"}
              <span className="text-[14px] text-[#9d9d9d] font-normal ml-2">
                ({filtered.length} {search ? "found" : "items"})
              </span>
            </h2>
            {filtered.length > 0 ? (
              <div className="grid justify-items-start gap-[13px] [grid-template-columns:repeat(auto-fit,268px)]">
                {filtered.map(renderCard)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Search size={28} className="text-[#d0d0d0] mb-3" />
                <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">No products found</p>
                <p className="text-[12px] text-[#9d9d9d]">Try a different search term</p>
              </div>
            )}
          </section>
        );
      })()}
    </>
  );
}

// ─── Product Detail ───────────────────────────────────────────────────────────

function OptionPill({
  label,
  selected,
  onClick,
  emphasis,
  card,
  tesla,
  blue,
  subLabel,
  tone = "apple",
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  emphasis?: boolean;
  card?: boolean;
  tesla?: boolean;
  blue?: boolean;
  subLabel?: string;
  tone?: "apple" | "green";
}) {
  const selectedOutline =
    tone === "green"
      ? "border-2 border-[#00B53F] bg-white text-[#111] shadow-[0_0_0_3px_rgba(0,181,63,0.10)]"
      : "border-[3px] border-[#4485FF] bg-white text-[#111]";

  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center border font-medium transition-colors ${subLabel ? "h-[46px] min-w-[102px] justify-center rounded-[7px] px-2 text-[12px]" : tesla ? "h-10 min-w-[94px] justify-center rounded-[7px] px-3 text-[12px]" : "h-11 rounded-[7px] px-5 text-[12px]"} ${
        selected && tesla
          ? blue
            ? "border-2 border-[#2563EB] bg-white text-[#171a20]"
            : "border-2 border-[#171a20] bg-white text-[#171a20]"
          : tesla
          ? "border border-[#d0d1d2] bg-white text-[#5c5e62] hover:border-[#8e8e8e]"
          : selected && card
          ? "border-[#183229] bg-[#eef7f2] text-[#183229] shadow-[0_8px_18px_rgba(24,50,41,0.08)]"
          : selected && emphasis
          ? "border-[#183229] bg-[#183229] text-white shadow-[0_8px_18px_rgba(24,50,41,0.16)]"
          : selected
          ? selectedOutline
          : "border-[#c8c8c8] bg-white text-[#333] hover:border-[#111]/50"
      }`}
    >
      <span className={`inline-flex items-center gap-1.5 ${card ? "w-full justify-between" : ""}`}>
        <span className={tesla ? "text-left" : ""}>
          <span className="block">{label}</span>
          {subLabel && <span className="mt-0.5 block rounded-full bg-[#f3f3f3] px-1.5 py-0.5 text-[10px] font-normal leading-[12px] text-[#444]">{subLabel}</span>}
        </span>
        {tesla && selected && <CheckCircle2 size={18} strokeWidth={2.2} className={`absolute -right-2 -top-2 text-white ${blue ? "fill-[#2563EB]" : "fill-black"}`} />}
        {(emphasis || card) && selected && <CheckCircle2 size={13} strokeWidth={2} />}
      </span>
    </button>
  );
}

function ManualVialPreview({
  name,
  strength,
  size,
  palette,
  baseImage = blankVialReference,
  compact = false,
  flatLabel = false,
}: {
  name: string;
  strength: string;
  size: string;
  palette?: VialPalette;
  baseImage?: string;
  compact?: boolean;
  flatLabel?: boolean;
}) {
  const breakCandidates = Array.from(name).flatMap((character, index) =>
    character === " " || character === "/" ? [{ index, character }] : [],
  );
  const selectedBreak = name.length > 16
    ? breakCandidates.reduce<{ index: number; character: string } | null>((best, candidate) => {
        const firstLength = candidate.character === "/" ? candidate.index + 1 : candidate.index;
        const secondLength = name.length - candidate.index - 1;
        const score = Math.max(firstLength, secondLength) + Math.abs(firstLength - secondLength) * 0.08;
        if (!best) return candidate;
        const bestFirstLength = best.character === "/" ? best.index + 1 : best.index;
        const bestSecondLength = name.length - best.index - 1;
        const bestScore = Math.max(bestFirstLength, bestSecondLength) + Math.abs(bestFirstLength - bestSecondLength) * 0.08;
        return score < bestScore ? candidate : best;
      }, null)
    : null;
  const firstLine = selectedBreak
    ? name.slice(0, selectedBreak.character === "/" ? selectedBreak.index + 1 : selectedBreak.index).trim()
    : name;
  const secondLine = selectedBreak ? name.slice(selectedBreak.index + 1).trim() : "";
  const labelCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    let drawFrame = 0;
    let densityQuery: MediaQueryList | null = null;

    const drawLabel = () => {
      const canvas = labelCanvasRef.current;
      if (!canvas || cancelled) return;

      const bounds = canvas.getBoundingClientRect();
      if (bounds.width <= 0 || bounds.height <= 0) return;

      // Keep the artwork at Retina density on standard external monitors too.
      // Recomputing from the live CSS size also prevents browser resampling when
      // the window moves between displays with different pixel densities.
      const pixelDensity = compact
        ? Math.max(4, window.devicePixelRatio || 1)
        : Math.min(3, Math.max(2, window.devicePixelRatio || 1));
      const width = Math.max(1, Math.round(bounds.width * pixelDensity));
      const height = Math.max(1, Math.round(bounds.height * pixelDensity));
      const renderScale = width / 1400;
      canvas.width = width;
      canvas.height = height;

      const source = document.createElement("canvas");
      source.width = width;
      source.height = height;
      const sourceContext = source.getContext("2d");
      const outputContext = canvas.getContext("2d");
      if (!sourceContext || !outputContext) return;

      const colors = {
        start: palette?.start ?? "#282e84",
        middle: palette?.middle ?? "#5d55bd",
        end: palette?.end ?? "#9680ef",
        mark: palette?.mark ?? "#9680ef",
        foreground: palette?.foreground ?? "#FFFFFF",
      };

      const fitFont = (text: string, maxWidth: number, maximum: number, minimum: number) => {
        sourceContext.font = `400 ${maximum}px "Bebas Neue", Impact, sans-serif`;
        const measured = Math.max(sourceContext.measureText(text.toUpperCase()).width, 1);
        const fitted = Math.min(maximum, maximum * (maxWidth / measured));
        return Math.max(minimum, fitted);
      };

      sourceContext.clearRect(0, 0, width, height);
      sourceContext.textBaseline = "top";
      sourceContext.textAlign = "left";
      sourceContext.fillStyle = "#050505";

      const nameLines = secondLine ? [firstLine, secondLine] : [firstLine];
      const nameFontSize = Math.min(
        ...nameLines.map((line) => fitFont(
          line,
          width * (compact ? 0.92 : 0.9),
          (compact ? 226 : 210) * renderScale,
          (compact ? 106 : 98) * renderScale,
        )),
      );
      sourceContext.font = `400 ${nameFontSize}px "Bebas Neue", Impact, sans-serif`;
      sourceContext.globalAlpha = 0.98;
      const nameX = width * 0.067;
      const firstNameY = secondLine ? height * 0.15 : height * 0.235;
      const nameLineGap = height * 0.17;
      nameLines.forEach((line, index) => {
        sourceContext.save();
        sourceContext.translate(nameX, firstNameY + index * nameLineGap);
        sourceContext.scale(compact ? 0.96 : 0.98, 1.22);
        sourceContext.fillText(line.toUpperCase(), 0, 0);
        sourceContext.globalAlpha = 1;
        sourceContext.globalCompositeOperation = "destination-out";
        sourceContext.lineWidth = compact
          ? Math.max(1, 3.2 * renderScale)
          : Math.max(0.8, 2.6 * renderScale);
        sourceContext.strokeStyle = "#000";
        sourceContext.strokeText(line.toUpperCase(), 0, 0);
        sourceContext.globalCompositeOperation = "source-over";
        sourceContext.restore();
      });
      sourceContext.globalAlpha = 1;

      const bandX = width * 0.0183;
      const bandY = height * 0.629;
      const bandWidth = width * 0.9232;
      const bandHeight = height * 0.219;
      const mainBandWidth = bandWidth * 0.876;
      const markX = bandX + mainBandWidth;
      const markWidth = bandWidth - mainBandWidth;

      if (flatLabel) {
        sourceContext.fillStyle = colors.middle;
      } else {
        const bandGradient = sourceContext.createLinearGradient(bandX, 0, bandX + mainBandWidth, 0);
        bandGradient.addColorStop(0, colors.start);
        bandGradient.addColorStop(0.18, colors.start);
        bandGradient.addColorStop(0.5, colors.middle);
        bandGradient.addColorStop(0.82, colors.end);
        bandGradient.addColorStop(1, colors.end);
        sourceContext.fillStyle = bandGradient;
      }
      sourceContext.fillRect(bandX, bandY, mainBandWidth + 1, bandHeight);

      if (!flatLabel) {
        const bandLight = sourceContext.createLinearGradient(bandX, 0, bandX + mainBandWidth, 0);
        bandLight.addColorStop(0, "rgba(7, 10, 35, 0.10)");
        bandLight.addColorStop(0.22, "rgba(255, 255, 255, 0.015)");
        bandLight.addColorStop(0.58, "rgba(255, 255, 255, 0.07)");
        bandLight.addColorStop(0.82, "rgba(255, 255, 255, 0.025)");
        bandLight.addColorStop(1, "rgba(255, 255, 255, 0.09)");
        sourceContext.fillStyle = bandLight;
        sourceContext.fillRect(bandX, bandY, mainBandWidth + 1, bandHeight);
      }

      sourceContext.fillStyle = flatLabel ? colors.middle : colors.mark;
      const markPieces = [
        [0, 0.5, 0.24, 0.5],
        [0.24, 0, 0.15, 0.5],
        [0.39, 0, 0.16, 1],
        [0.55, 0.5, 0.16, 0.5],
        [0.71, 0, 0.17, 0.5],
        [0.88, 0.5, 0.12, 0.5],
      ];
      markPieces.forEach(([x, y, pieceWidth, pieceHeight], index) => {
        sourceContext.globalAlpha = flatLabel ? 1 : 0.9 + index * 0.018;
        sourceContext.fillRect(
          markX + markWidth * x,
          bandY + bandHeight * y,
          markWidth * pieceWidth + 1,
          bandHeight * pieceHeight,
        );
      });
      sourceContext.globalAlpha = 1;
      const strengthText = strength.toUpperCase();
      const strengthFontSize = fitFont(
        strengthText,
        mainBandWidth * 0.76,
        (compact ? 104 : 94) * renderScale,
        (compact ? 47 : 43) * renderScale,
      );
      sourceContext.font = `400 ${strengthFontSize}px "Bebas Neue", Impact, sans-serif`;
      sourceContext.fillStyle = colors.foreground;
      sourceContext.textAlign = "left";
      sourceContext.textBaseline = "middle";
      sourceContext.save();
      sourceContext.translate(bandX + mainBandWidth * 0.065, bandY + bandHeight * 0.515);
      sourceContext.scale(compact ? 0.96 : 0.98, 1.12);
      sourceContext.fillText(strengthText, 0, 0);
      sourceContext.globalCompositeOperation = "destination-out";
      sourceContext.lineWidth = compact
        ? Math.max(0.8, 2.2 * renderScale)
        : Math.max(0.65, 1.8 * renderScale);
      sourceContext.strokeStyle = "#000";
      sourceContext.strokeText(strengthText, 0, 0);
      sourceContext.globalCompositeOperation = "source-over";
      sourceContext.restore();

      outputContext.clearRect(0, 0, width, height);
      outputContext.imageSmoothingEnabled = true;
      outputContext.imageSmoothingQuality = "high";
      const thetaMax = 0.72;
      const sinMax = Math.sin(thetaMax);
      const curveDepth = 28 * renderScale;
      const sourceSliceWidth = 1;

      for (let sourceX = 0; sourceX < width; sourceX += sourceSliceWidth) {
        const nextSourceX = Math.min(sourceX + sourceSliceWidth, width);
        const normalizedX = (sourceX / width - 0.5) * 2;
        const nextNormalizedX = (nextSourceX / width - 0.5) * 2;
        const destinationX = width * 0.5 + (Math.sin(normalizedX * thetaMax) / sinMax) * width * 0.5;
        const nextDestinationX = width * 0.5 + (Math.sin(nextNormalizedX * thetaMax) / sinMax) * width * 0.5;
        const centerAmount = 1 - normalizedX * normalizedX;
        const yOffset = curveDepth * (centerAmount - 0.42);
        const verticalScale = 1 + centerAmount * 0.008;
        outputContext.drawImage(
          source,
          sourceX,
          0,
          nextSourceX - sourceX,
          height,
          destinationX - 0.5,
          yOffset,
          nextDestinationX - destinationX + 1,
          height * verticalScale,
        );
      }

    };

    const scheduleDraw = () => {
      window.cancelAnimationFrame(drawFrame);
      drawFrame = window.requestAnimationFrame(drawLabel);
    };

    const canvas = labelCanvasRef.current;
    const resizeObserver = typeof ResizeObserver === "undefined"
      ? null
      : new ResizeObserver(scheduleDraw);
    if (canvas) resizeObserver?.observe(canvas);

    const handleDensityChange = () => {
      densityQuery?.removeEventListener("change", handleDensityChange);
      densityQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
      densityQuery.addEventListener("change", handleDensityChange);
      scheduleDraw();
    };

    handleDensityChange();
    window.addEventListener("resize", scheduleDraw);
    document.fonts?.load('400 174px "Bebas Neue"').then(scheduleDraw).catch(() => undefined);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(drawFrame);
      resizeObserver?.disconnect();
      densityQuery?.removeEventListener("change", handleDensityChange);
      window.removeEventListener("resize", scheduleDraw);
    };
  }, [firstLine, secondLine, strength, palette, compact, flatLabel]);

  return (
    <div
      className={`manual-vial-preview ${compact ? "manual-vial-preview-compact" : ""}`}
      role="img"
      aria-label={`${name}, ${strength}, ${size}`}
    >
      <img src={baseImage} alt="" draggable={false} />
      <div className="manual-vial-label" aria-hidden="true">
        <canvas ref={labelCanvasRef} className="manual-vial-art" />
      </div>
    </div>
  );
}

function ManualNasalSprayPreview({
  name,
  strength,
  palette,
  baseImage = blankNasalSprayReference,
  variant = "nasal",
  compact = false,
  flatLabel = false,
}: {
  name: string;
  strength: string;
  palette?: VialPalette;
  baseImage?: string;
  variant?: "nasal" | "topical";
  compact?: boolean;
  flatLabel?: boolean;
}) {
  const labelCanvasRef = useRef<HTMLCanvasElement>(null);
  const desiredLineCount = variant === "topical"
    ? name.length > 58 ? 4 : name.length > 28 ? 3 : name.length > 16 ? 2 : 1
    : name.toLowerCase().includes("nasal spray") || name.length > 24 ? 3 : name.length > 14 ? 2 : 1;
  const nasalNameTokens = name.replaceAll("/", "/ ").trim().split(/\s+/).filter(Boolean);
  const nasalNameLines = nasalNameTokens.reduce<string[]>((lines, token) => {
    if (desiredLineCount === 1) return [name];
    const currentLine = lines.at(-1) ?? "";
    const targetLength = Math.ceil(name.length / desiredLineCount);
    if (currentLine && `${currentLine} ${token}`.length > targetLength && lines.length < desiredLineCount) {
      lines.push(token);
    } else if (lines.length === 0) {
      lines.push(token);
    } else {
      lines[lines.length - 1] = `${currentLine} ${token}`;
    }
    return lines;
  }, []);

  useEffect(() => {
    let cancelled = false;
    let drawFrame = 0;
    let densityQuery: MediaQueryList | null = null;

    const drawLabel = () => {
      const canvas = labelCanvasRef.current;
      if (!canvas || cancelled) return;
      const bounds = canvas.getBoundingClientRect();
      if (bounds.width <= 0 || bounds.height <= 0) return;

      const pixelDensity = compact
        ? Math.max(variant === "topical" ? 4 : 3, window.devicePixelRatio || 1)
        : Math.min(3, Math.max(2, window.devicePixelRatio || 1));
      const width = Math.max(1, Math.round(bounds.width * pixelDensity));
      const height = Math.max(1, Math.round(bounds.height * pixelDensity));
      canvas.width = width;
      canvas.height = height;

      const source = document.createElement("canvas");
      source.width = width;
      source.height = height;
      const sourceContext = source.getContext("2d");
      const outputContext = canvas.getContext("2d");
      if (!sourceContext || !outputContext) return;

      const colors = {
        start: palette?.start ?? "#BFD5D2",
        middle: palette?.middle ?? "#6FAEA1",
        end: palette?.end ?? "#A9E2B0",
        mark: palette?.mark ?? "#A9E2B0",
        foreground: palette?.foreground ?? "#FFFFFF",
      };
      const renderScale = width / 720;
      const fitFont = (text: string, maxWidth: number, maximum: number, minimum: number) => {
        sourceContext.font = `400 ${maximum}px "Bebas Neue", Impact, sans-serif`;
        const measured = Math.max(sourceContext.measureText(text.toUpperCase()).width, 1);
        return Math.max(minimum, Math.min(maximum, maximum * maxWidth / measured));
      };

      sourceContext.clearRect(0, 0, width, height);
      const topicalLineCount = nasalNameLines.length;
      const maximumNameSize = variant === "topical"
        ? topicalLineCount === 1 ? 190 : topicalLineCount === 2 ? 150 : topicalLineCount === 3 ? 132 : 110
        : topicalLineCount === 1 ? 210 : topicalLineCount === 2 ? 140 : topicalLineCount === 3 ? 112 : 92;
      const minimumNameSize = variant === "topical" ? 48 : 42;
      const widthFittedNameSize = Math.min(...nasalNameLines.map(line => fitFont(
        line,
        width * (variant === "topical" ? 0.88 : 0.84),
        maximumNameSize * renderScale,
        minimumNameSize * renderScale,
      )));
      const topicalBandY = height * (topicalLineCount >= 4 ? 0.67 : topicalLineCount === 3 ? 0.64 : 0.61);
      const topicalNameAreaHeight = topicalBandY - height * 0.1;
      const heightFittedNameSize = variant === "topical"
        ? topicalNameAreaHeight / (topicalLineCount * 0.82 + Math.max(0, topicalLineCount - 1) * 0.22)
        : widthFittedNameSize;
      const nameFontSize = Math.min(widthFittedNameSize, heightFittedNameSize);
      sourceContext.font = `400 ${nameFontSize}px "Bebas Neue", Impact, sans-serif`;
      sourceContext.fillStyle = "#090909";
      sourceContext.textAlign = "left";
      sourceContext.textBaseline = "top";
      const firstNameY = variant === "topical"
        ? Math.max(height * 0.1, (topicalBandY - nameFontSize * (topicalLineCount * 0.82 + Math.max(0, topicalLineCount - 1) * 0.22)) * 0.5)
        : height * (topicalLineCount === 1 ? 0.2 : topicalLineCount === 2 ? 0.115 : topicalLineCount === 3 ? 0.055 : 0.025);
      const nameLineGap = variant === "topical"
        ? nameFontSize * 1.04
        : height * (topicalLineCount >= 4 ? 0.125 : topicalLineCount === 3 ? 0.15 : 0.2);
      nasalNameLines.forEach((line, index) => {
        sourceContext.save();
        sourceContext.translate(width * (variant === "topical" ? 0.055 : 0.075), firstNameY + index * nameLineGap);
        sourceContext.scale(variant === "topical" ? 0.8 : 0.98, variant === "topical" ? 1 : 1.12);
        const labelLine = line.toUpperCase();
        sourceContext.fillText(labelLine, 0, 0);
        sourceContext.globalCompositeOperation = "destination-out";
        sourceContext.lineWidth = variant === "topical"
          ? Math.max(0.65, 1.5 * renderScale)
          : Math.max(0.8, 3 * renderScale);
        sourceContext.strokeStyle = "#000";
        sourceContext.strokeText(labelLine, 0, 0);
        sourceContext.globalCompositeOperation = "source-over";
        sourceContext.restore();
      });

      const bandX = width * (variant === "topical" ? 0.055 : 0.035);
      const bandY = height * (variant === "topical"
        ? topicalLineCount >= 4 ? 0.67 : topicalLineCount === 3 ? 0.64 : 0.61
        : topicalLineCount >= 4 ? 0.65 : 0.585);
      const bandWidth = width * (variant === "topical" ? 0.89 : 0.91);
      const bandHeight = height * (variant === "topical" ? 0.15 : 0.19);
      const mainBandWidth = bandWidth * 0.84;
      if (flatLabel) {
        sourceContext.fillStyle = colors.middle;
      } else {
        const bandGradient = sourceContext.createLinearGradient(bandX, 0, bandX + mainBandWidth, 0);
        bandGradient.addColorStop(0, colors.start);
        bandGradient.addColorStop(0.2, colors.start);
        bandGradient.addColorStop(0.54, colors.middle);
        bandGradient.addColorStop(0.86, colors.end);
        bandGradient.addColorStop(1, colors.end);
        sourceContext.fillStyle = bandGradient;
      }
      sourceContext.fillRect(bandX, bandY, mainBandWidth + 1, bandHeight);

      const markX = bandX + mainBandWidth;
      const markWidth = bandWidth - mainBandWidth;
      sourceContext.fillStyle = flatLabel ? colors.middle : colors.mark;
      [
        [0, 0.5, 0.28, 0.5],
        [0.28, 0, 0.2, 0.5],
        [0.48, 0, 0.22, 1],
        [0.7, 0.5, 0.18, 0.5],
        [0.88, 0, 0.12, 0.5],
      ].forEach(([x, y, pieceWidth, pieceHeight]) => {
        sourceContext.fillRect(
          markX + markWidth * x,
          bandY + bandHeight * y,
          markWidth * pieceWidth + 1,
          bandHeight * pieceHeight,
        );
      });

      const strengthText = strength.toUpperCase();
      const strengthFontSize = fitFont(
        strengthText,
        mainBandWidth * (variant === "topical" ? 0.76 : 0.68),
        (variant === "topical" ? 74 : 64) * renderScale,
        (variant === "topical" ? 38 : 30) * renderScale,
      );
      sourceContext.font = `400 ${strengthFontSize}px "Bebas Neue", Impact, sans-serif`;
      sourceContext.fillStyle = colors.foreground;
      sourceContext.textBaseline = "middle";
      sourceContext.fillText(strengthText, bandX + mainBandWidth * 0.06, bandY + bandHeight * 0.53);
      sourceContext.globalCompositeOperation = "destination-out";
      sourceContext.lineWidth = Math.max(0.6, (variant === "topical" ? 1.2 : 1.8) * renderScale);
      sourceContext.strokeStyle = "#000";
      sourceContext.strokeText(strengthText, bandX + mainBandWidth * 0.06, bandY + bandHeight * 0.53);
      sourceContext.globalCompositeOperation = "source-over";

      outputContext.clearRect(0, 0, width, height);
      outputContext.imageSmoothingEnabled = true;
      outputContext.imageSmoothingQuality = "high";
      const thetaMax = variant === "topical" ? 0.62 : 0.48;
      const sinMax = Math.sin(thetaMax);
      const curveDepth = 10 * renderScale;
      for (let sourceX = 0; sourceX < width; sourceX += 1) {
        const nextSourceX = Math.min(sourceX + 1, width);
        const normalizedX = (sourceX / width - 0.5) * 2;
        const nextNormalizedX = (nextSourceX / width - 0.5) * 2;
        const destinationX = width * 0.5 + Math.sin(normalizedX * thetaMax) / sinMax * width * 0.5;
        const nextDestinationX = width * 0.5 + Math.sin(nextNormalizedX * thetaMax) / sinMax * width * 0.5;
        const centerAmount = 1 - normalizedX * normalizedX;
        outputContext.drawImage(
          source,
          sourceX,
          0,
          1,
          height,
          destinationX - 0.5,
          curveDepth * (centerAmount - 0.42),
          nextDestinationX - destinationX + 1,
          height * (1 + centerAmount * 0.006),
        );
      }

    };

    const scheduleDraw = () => {
      window.cancelAnimationFrame(drawFrame);
      drawFrame = window.requestAnimationFrame(drawLabel);
    };
    const canvas = labelCanvasRef.current;
    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleDraw);
    if (canvas) resizeObserver?.observe(canvas);
    const handleDensityChange = () => {
      densityQuery?.removeEventListener("change", handleDensityChange);
      densityQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
      densityQuery.addEventListener("change", handleDensityChange);
      scheduleDraw();
    };
    handleDensityChange();
    window.addEventListener("resize", scheduleDraw);
    document.fonts?.load('400 150px "Bebas Neue"').then(scheduleDraw).catch(() => undefined);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(drawFrame);
      resizeObserver?.disconnect();
      densityQuery?.removeEventListener("change", handleDensityChange);
      window.removeEventListener("resize", scheduleDraw);
    };
  }, [name, strength, palette, compact, variant, flatLabel]);

  return (
    <div className={`${variant === "topical" ? "manual-topical-preview" : "manual-nasal-preview"} ${compact ? variant === "topical" ? "manual-topical-preview-compact" : "manual-nasal-preview-compact" : ""}`} role="img" aria-label={`${name}, ${strength}, ${variant}`}>
      <img src={baseImage} alt="" draggable={false} />
      <div className={variant === "topical" ? "manual-topical-label" : "manual-nasal-label"} aria-hidden="true">
        <canvas ref={labelCanvasRef} className="manual-nasal-art" />
      </div>
    </div>
  );
}

function ManualPatchPreview({
  name,
  strength,
  compact = false,
}: {
  name: string;
  strength: string;
  compact?: boolean;
}) {
  const labelCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    let drawFrame = 0;
    let densityQuery: MediaQueryList | null = null;

    const drawLabel = () => {
      const canvas = labelCanvasRef.current;
      if (!canvas || cancelled) return;
      const bounds = canvas.getBoundingClientRect();
      if (bounds.width <= 0 || bounds.height <= 0) return;

      const pixelDensity = compact
        ? Math.max(4, window.devicePixelRatio || 1)
        : Math.min(3, Math.max(2, window.devicePixelRatio || 1));
      canvas.width = Math.max(1, Math.round(bounds.width * pixelDensity));
      canvas.height = Math.max(1, Math.round(bounds.height * pixelDensity));
      const context = canvas.getContext("2d");
      if (!context) return;

      const width = canvas.width;
      const height = canvas.height;
      const renderScale = width / 1200;
      const fitFont = (text: string, maxWidth: number, maximum: number, minimum: number) => {
        context.font = `400 ${maximum}px "Bebas Neue", Impact, sans-serif`;
        const measured = Math.max(context.measureText(text.toUpperCase()).width, 1);
        return Math.max(minimum, Math.min(maximum, maximum * maxWidth / measured));
      };

      context.clearRect(0, 0, width, height);
      const productName = name.toUpperCase();
      const nameFontSize = fitFont(productName, width * 0.93, 220 * renderScale, 80 * renderScale);
      context.font = `400 ${nameFontSize}px "Bebas Neue", Impact, sans-serif`;
      context.fillStyle = "#090909";
      context.textAlign = "left";
      context.textBaseline = "top";
      context.fillText(productName, width * 0.055, height * 0.045 + 5 * pixelDensity);

      const bandX = width * 0.035;
      const bandY = height * 0.58;
      const bandWidth = width * 0.93;
      const bandHeight = height * 0.22;
      const mainBandWidth = bandWidth * 0.78;
      context.fillStyle = "#E8CFC8";
      context.fillRect(bandX, bandY, mainBandWidth, bandHeight);

      const markX = bandX + bandWidth * 0.82;
      const markWidth = bandWidth * 0.18;
      [
        [0, 0.5, 0.28, 0.5],
        [0.28, 0, 0.2, 0.5],
        [0.48, 0, 0.22, 1],
        [0.7, 0.5, 0.18, 0.5],
        [0.88, 0, 0.12, 0.5],
      ].forEach(([x, y, pieceWidth, pieceHeight]) => {
        context.fillRect(
          markX + markWidth * x,
          bandY + bandHeight * y,
          markWidth * pieceWidth + 1,
          bandHeight * pieceHeight,
        );
      });

      const strengthFontSize = fitFont(strength, mainBandWidth * 0.78, 76 * renderScale, 34 * renderScale);
      context.font = `400 ${strengthFontSize}px "Bebas Neue", Impact, sans-serif`;
      context.fillStyle = "#6A4741";
      context.textBaseline = "middle";
      context.fillText(strength.toUpperCase(), bandX + mainBandWidth * 0.05, bandY + bandHeight * 0.52);

    };

    const scheduleDraw = () => {
      window.cancelAnimationFrame(drawFrame);
      drawFrame = window.requestAnimationFrame(drawLabel);
    };
    const canvas = labelCanvasRef.current;
    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleDraw);
    if (canvas) resizeObserver?.observe(canvas);
    const handleDensityChange = () => {
      densityQuery?.removeEventListener("change", handleDensityChange);
      densityQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
      densityQuery.addEventListener("change", handleDensityChange);
      scheduleDraw();
    };
    handleDensityChange();
    window.addEventListener("resize", scheduleDraw);
    document.fonts?.load('400 180px "Bebas Neue"').then(scheduleDraw).catch(() => undefined);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(drawFrame);
      resizeObserver?.disconnect();
      densityQuery?.removeEventListener("change", handleDensityChange);
      window.removeEventListener("resize", scheduleDraw);
    };
  }, [name, strength, compact]);

  return (
    <div className={`manual-patch-preview ${compact ? "manual-patch-preview-compact" : ""}`} role="img" aria-label={`${name}, ${strength}, patch`}>
      <img src={blankPatchPackageReference} alt="" draggable={false} />
      <canvas ref={labelCanvasRef} className="manual-patch-label" aria-hidden="true" />
    </div>
  );
}

function ManualCapsulePreview({
  name,
  strength,
  palette,
  compact = false,
  flatLabel = false,
}: {
  name: string;
  strength: string;
  palette?: VialPalette;
  compact?: boolean;
  flatLabel?: boolean;
}) {
  const labelCanvasRef = useRef<HTMLCanvasElement>(null);
  const desiredLineCount = name.length > 56 ? 4 : name.length > 36 ? 3 : name.length > 18 ? 2 : 1;
  const capsuleNameTokens = name.replaceAll("/", "/ ").trim().split(/\s+/).filter(Boolean);
  const capsuleNameLines = capsuleNameTokens.reduce<string[]>((lines, token) => {
    if (desiredLineCount === 1) return [name];
    const currentLine = lines.at(-1) ?? "";
    const targetLength = Math.ceil(name.length / desiredLineCount);
    if (currentLine && `${currentLine} ${token}`.length > targetLength && lines.length < desiredLineCount) {
      lines.push(token);
    } else if (lines.length === 0) {
      lines.push(token);
    } else {
      lines[lines.length - 1] = `${currentLine} ${token}`;
    }
    return lines;
  }, []);

  useEffect(() => {
    let cancelled = false;
    let drawFrame = 0;

    const drawLabel = () => {
      const canvas = labelCanvasRef.current;
      if (!canvas || cancelled) return;
      const bounds = canvas.getBoundingClientRect();
      if (bounds.width <= 0 || bounds.height <= 0) return;
      const pixelDensity = compact ? Math.max(4, window.devicePixelRatio || 1) : Math.min(3, Math.max(2, window.devicePixelRatio || 1));
      canvas.width = Math.max(1, Math.round(bounds.width * pixelDensity));
      canvas.height = Math.max(1, Math.round(bounds.height * pixelDensity));
      const context = canvas.getContext("2d");
      if (!context) return;
      const width = canvas.width;
      const height = canvas.height;
      const renderScale = width / 900;
      const source = document.createElement("canvas");
      source.width = width;
      source.height = height;
      const sourceContext = source.getContext("2d");
      if (!sourceContext) return;
      const fitFont = (text: string, maxWidth: number, maximum: number, minimum: number) => {
        sourceContext.font = `400 ${maximum}px "Bebas Neue", Impact, sans-serif`;
        const measured = Math.max(sourceContext.measureText(text.toUpperCase()).width, 1);
        return Math.max(minimum, Math.min(maximum, maximum * maxWidth / measured));
      };

      sourceContext.clearRect(0, 0, width, height);
      const maximumNameSize = [174, 150, 118, 94][capsuleNameLines.length - 1] ?? 94;
      const minimumNameSize = capsuleNameLines.length >= 4 ? 46 : 58;
      const nameSize = Math.min(...capsuleNameLines.map(line => fitFont(line, width * 0.74, maximumNameSize * renderScale, minimumNameSize * renderScale)));
      sourceContext.font = `400 ${nameSize}px "Bebas Neue", Impact, sans-serif`;
      sourceContext.fillStyle = "#080808";
      sourceContext.textAlign = "left";
      sourceContext.textBaseline = "top";
      const lineLayout = {
        1: { top: 0.285, gap: 0 },
        2: { top: 0.19, gap: 0.185 },
        3: { top: 0.095, gap: 0.15 },
        4: { top: 0.045, gap: 0.12 },
      }[capsuleNameLines.length] ?? { top: 0.045, gap: 0.12 };
      capsuleNameLines.forEach((line, index) => {
        sourceContext.save();
        sourceContext.translate(width * 0.11, height * (lineLayout.top + index * lineLayout.gap));
        sourceContext.scale(0.96, 1.16);
        sourceContext.fillText(line.toUpperCase(), 0, 0);
        sourceContext.globalCompositeOperation = "destination-out";
        sourceContext.lineWidth = Math.max(0.8, 2.4 * renderScale);
        sourceContext.strokeStyle = "#000";
        sourceContext.strokeText(line.toUpperCase(), 0, 0);
        sourceContext.restore();
      });

      const bandX = width * 0.06;
      const bandY = height * 0.675;
      const bandWidth = width * 0.88;
      const bandHeight = height * 0.185;
      const mainBandWidth = bandWidth * 0.875;
      const colors = {
        start: palette?.start ?? "#581C3B",
        middle: palette?.middle ?? "#7D2D59",
        end: palette?.end ?? "#B690C8",
        mark: palette?.mark ?? "#B690C8",
        foreground: palette?.foreground ?? "#F1C9A8",
      };
      if (flatLabel) {
        sourceContext.fillStyle = colors.middle;
      } else {
        const bandGradient = sourceContext.createLinearGradient(bandX, 0, bandX + mainBandWidth, 0);
        bandGradient.addColorStop(0, colors.start);
        bandGradient.addColorStop(0.24, colors.start);
        bandGradient.addColorStop(0.55, colors.middle);
        bandGradient.addColorStop(0.86, colors.end);
        bandGradient.addColorStop(1, colors.end);
        sourceContext.fillStyle = bandGradient;
      }
      sourceContext.fillRect(bandX, bandY, mainBandWidth, bandHeight);
      const markX = bandX + mainBandWidth;
      const markWidth = bandWidth - mainBandWidth;
      sourceContext.fillStyle = flatLabel ? colors.middle : colors.mark;
      [[0, .5, .24, .5], [.24, 0, .15, .5], [.39, 0, .16, 1], [.55, .5, .16, .5], [.71, 0, .17, .5], [.88, .5, .12, .5]].forEach(([x, y, w, h]) => {
        sourceContext.fillRect(markX + markWidth * x, bandY + bandHeight * y, markWidth * w + 1, bandHeight * h);
      });
      const strengthSize = fitFont(strength, mainBandWidth * 0.72, 68 * renderScale, 34 * renderScale);
      sourceContext.font = `400 ${strengthSize}px "Bebas Neue", Impact, sans-serif`;
      sourceContext.fillStyle = colors.foreground;
      sourceContext.textBaseline = "middle";
      sourceContext.fillText(strength.toUpperCase(), bandX + mainBandWidth * 0.075, bandY + bandHeight * 0.53);

      context.clearRect(0, 0, width, height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      const thetaMax = 0.5;
      const sinMax = Math.sin(thetaMax);
      const curveDepth = 18 * renderScale;
      for (let sourceX = 0; sourceX < width; sourceX += 1) {
        const nextSourceX = Math.min(sourceX + 1, width);
        const normalizedX = (sourceX / width - 0.5) * 2;
        const nextNormalizedX = (nextSourceX / width - 0.5) * 2;
        const destinationX = width * 0.5 + Math.sin(normalizedX * thetaMax) / sinMax * width * 0.5;
        const nextDestinationX = width * 0.5 + Math.sin(nextNormalizedX * thetaMax) / sinMax * width * 0.5;
        const centerAmount = 1 - normalizedX * normalizedX;
        context.drawImage(source, sourceX, 0, 1, height, destinationX - 0.5, curveDepth * (centerAmount - 0.42), nextDestinationX - destinationX + 1, height * (1 + centerAmount * 0.007));
      }
    };

    const scheduleDraw = () => {
      window.cancelAnimationFrame(drawFrame);
      drawFrame = window.requestAnimationFrame(drawLabel);
    };
    const canvas = labelCanvasRef.current;
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleDraw);
    if (canvas) observer?.observe(canvas);
    window.addEventListener("resize", scheduleDraw);
    document.fonts?.load('400 150px "Bebas Neue"').then(scheduleDraw).catch(() => undefined);
    scheduleDraw();
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(drawFrame);
      observer?.disconnect();
      window.removeEventListener("resize", scheduleDraw);
    };
  }, [name, strength, palette, compact, flatLabel]);

  return (
    <div className={`manual-capsule-preview ${compact ? "manual-capsule-preview-compact" : ""}`} role="img" aria-label={`${name}, ${strength}, capsule`}>
      <img src={blankCapsuleBottleReference} alt="" draggable={false} />
      <div className="manual-capsule-label" aria-hidden="true">
        <canvas ref={labelCanvasRef} className="manual-capsule-art" />
      </div>
    </div>
  );
}

function ProductDetailPage({
  onNavigate,
  cartMode,
  setCartMode,
  onAddToPatientCart,
  product,
  extraVariants,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  onAddToPatientCart: (entries: PatientCartEntry[]) => void;
  product: CardDef;
  extraVariants: boolean;
}) {
  const isCompoundProduct = product.name.includes("/");
  const isTirzepatidePyridoxine = product.name.toLowerCase().includes("tirzepatide") && product.name.toLowerCase().includes("pyridoxine");
  const defaultSize = product.dosage === "Gel" ? "30g Tube" : product.dosage === "Capsule" ? "30 Capsules" : product.dosage === "Nasal Spray" ? "1 (10mL) Bottle" : product.dosage === "Topical" ? "1 (30mL) Bottle" : product.dosage === "Patch" ? "30 Patches" : isTirzepatidePyridoxine ? "1 (0.5mL) Vial" : "1 (5mL) Vial";
  const defaultStrength = product.strength ?? (isTirzepatidePyridoxine ? "20mg/25mg/mL" : isCompoundProduct ? "15mg/40mg/250mg/mL" : product.price.includes("mg") ? product.price : product.dosage === "Gel" ? "0.025%" : "5mg/mL");
  const [size, setSize] = useState(defaultSize);
  const [strength, setStrength] = useState(defaultStrength);
  const [injType, setInjType] = useState(product.dosage === "Injection" ? "Intramuscular" : product.dosage);
  const [pharmacy, setPharmacy] = useState(product.pharmacy);
  const [qty, setQty] = useState(1);
  const [suppliesOpen, setSuppliesOpen] = useState(false);
  const [patientPickerOpen, setPatientPickerOpen] = useState(false);
  const [createPatientOpen, setCreatePatientOpen] = useState(false);
  const [patientSearch, setPatientSearch] = useState("");
  const [paymentChoice, setPaymentChoice] = useState<"patient" | "clinic" | "card">("patient");
  const [shippingChoice, setShippingChoice] = useState<"patient" | "clinic">("clinic");
  const [selectedPatientIds, setSelectedPatientIds] = useState<Set<number>>(new Set());
  const [patientQuantities, setPatientQuantities] = useState<Record<number, number>>({});
  const [expandedPatientIds, setExpandedPatientIds] = useState<Set<number>>(new Set());
  const [addedItemCount, setAddedItemCount] = useState<number | null>(null);
  const [deliveryState, setDeliveryState] = useState("Florida");
  const [locationMenuOpen, setLocationMenuOpen] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<"overview" | "formula" | "dosage" | "safety">("overview");
  const [productDetailVariant, setProductDetailVariant] = useState<1 | 2 | 3 | 4 | 5 | 6>(6);
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountApplying, setDiscountApplying] = useState(false);
  const configurationCardRef = useRef<HTMLDivElement>(null);
  const [productCardHeight, setProductCardHeight] = useState(825);
  const { addCartItems } = useCartSummary();
  const { runWithAppLoader, showToast } = useAppLoading();

  useEffect(() => {
    setSize(defaultSize);
    setStrength(defaultStrength);
    setInjType(product.dosage === "Injection" ? "Intramuscular" : product.dosage);
    setPharmacy(product.pharmacy);
    setQty(1);
    setPaymentChoice("patient");
    setShippingChoice("clinic");
    setSelectedPatientIds(new Set());
    setPatientQuantities({});
    setExpandedPatientIds(new Set());
    setAddedItemCount(null);
    setQuestionModalOpen(false);
    setQuestionText("");
    setDiscountApplied(false);
    setDiscountApplying(false);
  }, [defaultSize, defaultStrength, product.dosage, product.id, product.pharmacy]);

  useEffect(() => {
    if (!extraVariants) setProductDetailVariant(6);
  }, [extraVariants]);

  useLayoutEffect(() => {
    if (configurationCardRef.current) {
      setProductCardHeight(configurationCardRef.current.offsetHeight);
    }
  }, [cartMode]);

  const baseProductPrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) || 35.88;
  const deliveryStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming",
  ];
  const sizeCatalog = isTirzepatidePyridoxine
    ? ["1 (0.5mL) Vial", "1 (1mL) Vial", "1 (2mL) Vial", "1 (3mL) Vial", "1 (5mL) Vial", "1 (10mL) Vial", "2 (0.5mL) Vials", "2 (1mL) Vials", "2 (2mL) Vials", "2 (5mL) Vials"]
    : product.dosage === "Nasal Spray"
    ? ["1 (5mL) Bottle", "1 (10mL) Bottle", "1 (15mL) Bottle", "1 (20mL) Bottle", "2 (5mL) Bottles", "2 (10mL) Bottles", "3 (5mL) Bottles", "3 (10mL) Bottles"]
    : product.dosage === "Gel"
    ? ["10g Tube", "15g Tube", "20g Tube", "30g Tube", "45g Tube", "60g Tube", "75g Tube", "90g Tube", "15g Pump", "30g Pump", "45g Pump", "60g Pump", "75g Pump", "90g Pump", "120g Pump"]
    : product.dosage === "Capsule"
    ? ["15 Capsules", "20 Capsules", "30 Capsules", "40 Capsules", "45 Capsules", "50 Capsules", "60 Capsules", "75 Capsules", "90 Capsules", "100 Capsules", "120 Capsules", "150 Capsules", "180 Capsules", "240 Capsules", "360 Capsules"]
    : ["1 (1mL) Vial", "1 (2mL) Vial", "1 (3mL) Vial", "1 (5mL) Vial", "1 (10mL) Vial", "1 (15mL) Vial", "1 (20mL) Vial", "1 (30mL) Vial", "2 (2mL) Vials", "2 (5mL) Vials", "2 (10mL) Vials", "3 (5mL) Vials", "4 (2mL) Vials", "5 (1mL) Vials", "6 (1mL) Vials"];
  const strengthCatalog = isTirzepatidePyridoxine
    ? ["5mg/6.25mg/mL", "7.5mg/9.4mg/mL", "10mg/12.5mg/mL", "12.5mg/15mg/mL", "15mg/18.75mg/mL", "17.5mg/22mg/mL", "20mg/25mg/mL", "22.5mg/28mg/mL", "25mg/31.25mg/mL", "30mg/37.5mg/mL"]
    : product.dosage === "Gel"
    ? ["0.005%", "0.01%", "0.015%", "0.02%", "0.025%", "0.03%", "0.04%", "0.05%", "0.06%", "0.075%", "0.08%", "0.1%", "0.125%", "0.15%", "0.2%"]
    : product.dosage === "Capsule"
    ? ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg", "20mg", "25mg", "30mg", "40mg", "50mg", "75mg", "100mg", "150mg", "200mg"]
    : isCompoundProduct
    ? ["5mg/20mg/100mg/mL", "7.5mg/25mg/125mg/mL", "10mg/30mg/150mg/mL", "12.5mg/35mg/200mg/mL", "15mg/40mg/250mg/mL", "17.5mg/45mg/275mg/mL", "20mg/50mg/300mg/mL", "22.5mg/60mg/350mg/mL", "25mg/75mg/400mg/mL", "30mg/80mg/450mg/mL", "35mg/90mg/500mg/mL", "40mg/100mg/550mg/mL", "45mg/110mg/600mg/mL", "50mg/125mg/650mg/mL", "60mg/150mg/750mg/mL"]
    : ["0.5mg/mL", "1mg/mL", "2mg/mL", "2.5mg/mL", "5mg/mL", "7.5mg/mL", "10mg/mL", "12.5mg/mL", "15mg/mL", "20mg/mL", "25mg/mL", "30mg/mL", "40mg/mL", "50mg/mL", "100mg/mL"];
  const rotateOptions = (options: string[], offset: number) => [
    ...options.slice(offset % options.length),
    ...options.slice(0, offset % options.length),
  ];
  const sizeOptionCount = 10 + ((product.id * 7) % 6);
  const strengthOptionCount = 10 + ((product.id * 11 + 3) % 6);
  const sizeOptions = [defaultSize, ...rotateOptions(sizeCatalog, product.id * 3)]
    .filter((option, index, list) => list.indexOf(option) === index)
    .slice(0, sizeOptionCount);
  const strengthOptions = [defaultStrength, ...rotateOptions(strengthCatalog, product.id * 5)]
    .filter((option, index, list) => list.indexOf(option) === index)
    .slice(0, strengthOptionCount);
  const usesWideStrengthCards = strengthOptions.some(option => option.length > 16);
  const sizePriceAdjustment = (Math.max(sizeOptions.indexOf(size), 0) - Math.max(sizeOptions.indexOf(defaultSize), 0)) * 10;
  const strengthPriceAdjustment = (Math.max(strengthOptions.indexOf(strength), 0) - Math.max(strengthOptions.indexOf(defaultStrength), 0)) * 5;
  const configurationPriceAdjustment = sizePriceAdjustment + strengthPriceAdjustment;
  const pharmacies = [
    { name: product.pharmacy, turnaround: "1-2 business days", price: baseProductPrice },
    { name: product.pharmacy === "Rush Pharmacy FL" ? "Optimal Balance Pharmacy" : "Rush Pharmacy FL", turnaround: "1-2 business days", price: baseProductPrice + 20 },
  ];
  const selectedPharmacy = pharmacies.find(option => option.name === pharmacy) ?? pharmacies[0];
  const configuredPrice = Math.max(0, selectedPharmacy.price + configurationPriceAdjustment);
  const priceChangeKey = `${size}-${strength}-${pharmacy}`;
  const selectedPatientCount = selectedPatientIds.size;
  const selectedItemCount = [...selectedPatientIds].reduce((sum, id) => sum + (patientQuantities[id] ?? 1), 0);
  const isMultiPatientOrder = cartMode === "multi" && selectedPatientIds.size > 1;
  const patientMatches = PATIENTS
    .map((patient, id) => ({ patient, id }))
    .filter(({ patient }) => {
      const query = patientSearch.trim().toLowerCase();
      return !query || `${patient.firstName} ${patient.lastName} ${patient.birthDate} ${patient.primaryPhone}`.toLowerCase().includes(query);
    })
    .slice(0, 6);

  function togglePatient(id: number) {
    setAddedItemCount(null);
    setSelectedPatientIds(current => {
      if (shippingChoice === "patient" && !current.has(id)) {
        setPatientQuantities({ [id]: 1 });
        return new Set([id]);
      }
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
        setPatientQuantities(quantities => {
          const updated = { ...quantities };
          delete updated[id];
          return updated;
        });
      } else {
        next.add(id);
        setPatientQuantities(quantities => ({ ...quantities, [id]: quantities[id] ?? 1 }));
      }
      return next;
    });
  }

  function selectShippingChoice(choice: "patient" | "clinic") {
    setShippingChoice(choice);
    setAddedItemCount(null);
    if (choice === "patient" && selectedPatientIds.size > 1) {
      const firstPatientId = [...selectedPatientIds][0];
      setSelectedPatientIds(new Set([firstPatientId]));
      setPatientQuantities(current => ({ [firstPatientId]: current[firstPatientId] ?? 1 }));
      setExpandedPatientIds(current => new Set(current.has(firstPatientId) ? [firstPatientId] : []));
    }
  }

  function updatePatientQuantity(id: number, change: number) {
    setPatientQuantities(current => ({
      ...current,
      [id]: Math.max(1, (current[id] ?? 1) + change),
    }));
  }

  function togglePatientDetails(id: number) {
    setExpandedPatientIds(current => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function addToCart() {
    if (selectedPatientCount === 0) return;
    const nextCartMode: CartMode = selectedPatientCount > 1 ? "multi" : "single";
    setCartMode(nextCartMode);
    const itemCount = Math.max(selectedItemCount, 1);
    runWithAppLoader(() => {
      addCartItems(itemCount, {
        id: product.id,
        name: product.name,
        price: `$${configuredPrice.toFixed(2)}`,
        img: product.img,
        qty: itemCount,
      });
      onAddToPatientCart([...selectedPatientIds].map((patientId, index) => ({
        id: Date.now() + index,
        patientId,
        product,
        qty: patientQuantities[patientId] ?? 1,
        pharmacy: selectedPharmacy.name,
        size,
        strength,
        injectionType: injType,
        unitPrice: configuredPrice,
      })));
      setAddedItemCount(itemCount);
      setSize(defaultSize);
      setStrength(defaultStrength);
      setInjType(product.dosage === "Injection" ? "Intramuscular" : product.dosage);
      setPharmacy(product.pharmacy);
      setQty(1);
      setSuppliesOpen(false);
      setPatientPickerOpen(false);
      setPatientSearch("");
      setSelectedPatientIds(new Set());
      setPatientQuantities({});
      setExpandedPatientIds(new Set());
      showToast("Product added to cart");
    });
  }

  const isReferenceStyle = productDetailVariant === 5 || productDetailVariant === 6;
  const isBlueReference = productDetailVariant === 6;

  return (
    <>
      <div className="pl-[15px]">
      <div className="-mt-4 mb-[39px]">
        <div className="flex items-start gap-3">
          {isReferenceStyle && (
            <PageBackButton onClick={() => onNavigate("products")} label="Back to catalog" />
          )}
          <div>
            <h1 className="text-[32px] font-medium leading-tight text-[#111]">Products</h1>
            <p className="mt-2 text-[11px] font-normal text-[#4b4b4b]">
              <button onClick={() => onNavigate("products")} className="text-[11px] font-normal hover:underline">Home</button>, <button onClick={() => onNavigate("products")} className="text-[11px] font-normal hover:underline">Catalog</button>, <span className="text-[11px] font-normal">{product.name}</span>
            </p>
          </div>
        </div>
      </div>
      {extraVariants && <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#777]">Page style</span>
        {([1, 2, 3, 4, 5, 6] as const).map(variant => (
          <button key={variant} onClick={() => setProductDetailVariant(variant)} className={`h-8 rounded-full px-3 text-[11px] font-semibold transition-colors ${productDetailVariant === variant ? "bg-[#111] text-white" : "border border-[#ddd] bg-white text-[#555] hover:border-[#999]"}`}>
            {variant}. {variant === 1 ? "Apple" : variant === 2 ? "Selection" : variant === 3 ? "Card Selection" : variant === 4 ? "Green" : variant === 5 ? "Reference" : "Blue"}
          </button>
        ))}
      </div>}
      <div className={`grid max-w-[1180px] items-start gap-10 ${isReferenceStyle ? "xl:grid-cols-[minmax(0,1.1fr)_minmax(480px,0.9fr)]" : "xl:grid-cols-[minmax(0,1.244fr)_minmax(0,1fr)]"}`}>
        <div className="min-w-0">
          <div className={`flex h-[600px] items-center justify-center overflow-hidden rounded-[18px] p-16 ${isReferenceStyle ? "bg-[#fafafa]" : `border border-[#e4e4e4] ${productDetailVariant === 2 ? "bg-[#fbfdfc]" : "bg-[#f8f8f8]"}`}`}>
            {product.img === blankVialReference || product.img === blankLyophilizedVialReference ? (
              <ManualVialPreview name={product.name} strength={strength} size={size} palette={product.vialPalette} baseImage={product.img} />
            ) : product.img === blankNasalSprayReference ? (
              <ManualNasalSprayPreview name={product.name} strength={strength} palette={product.vialPalette} />
            ) : product.img === blankTopicalDropperReference ? (
              <ManualNasalSprayPreview name={product.name} strength={strength} palette={product.vialPalette} baseImage={product.img} variant="topical" />
            ) : product.img === blankPatchPackageReference ? (
              <ManualPatchPreview name={product.name} strength={strength} />
            ) : product.img === blankCapsuleBottleReference ? (
              <ManualCapsulePreview name={product.name} strength={strength} palette={product.vialPalette} />
            ) : (
              <img src={product.img} alt={product.name} className="max-h-[470px] h-full w-full object-contain mix-blend-multiply" />
            )}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              { label: "Sterile", icon: Syringe },
              { label: "Refrigerated", icon: Snowflake },
              { label: "Controlled Substance", icon: Lock },
              { label: "Protect from Light", icon: EyeOff },
            ].map(({ label, icon: Icon }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[#202020] bg-white px-4 py-2 text-[12px] font-medium text-[#202020]">
                <Icon size={15} strokeWidth={1.7} />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div ref={configurationCardRef} className="min-w-0 -mt-[23px]">
          {isReferenceStyle ? (
            <h1 className="text-left text-[32px] font-medium leading-tight tracking-[-0.02em] text-[#111]">{product.name}</h1>
          ) : (
            <h1 className="text-[30px] font-medium leading-tight text-[#111]">{product.name}</h1>
          )}
          <p className="mt-1.5 max-w-[500px] text-[13px] leading-[1.45] text-[#666]">A compounded {product.dosage.toLowerCase()} developed for personalized {product.areaOfTreatment.toLowerCase()} treatment and patient care.</p>
          <div key={priceChangeKey} className="mt-3 flex animate-[pulse_600ms_ease-out_1] items-center rounded-[7px]">
            <p className="text-[25px] font-medium text-[#111]">${configuredPrice.toFixed(2)}</p>
          </div>
          {isReferenceStyle && (
            <button
              type="button"
              onClick={() => setQuestionModalOpen(true)}
              className="mt-2 cursor-pointer text-[11px] font-medium text-[#333] underline decoration-[#999] underline-offset-4 transition-colors hover:text-black hover:decoration-black"
            >
              Ask a question?
            </button>
          )}

          <div className={`${isReferenceStyle ? "mt-6" : "mt-2 border-t border-[#ededed] pt-2"}`}>
            <div className={isReferenceStyle ? "mb-3 flex items-center gap-3" : ""}><p className={`${isReferenceStyle ? "shrink-0 text-[12px] font-medium" : "mb-2 text-[12px] font-medium"} text-[#111]`}>Size</p>{isReferenceStyle && <span className="h-px flex-1 bg-[#e5e5e5]" />}</div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 [&>button]:w-full [&>button]:min-w-0">
              {sizeOptions.map(option => <OptionPill key={option} label={option} selected={size === option} onClick={() => setSize(option)} emphasis={productDetailVariant === 2} card={productDetailVariant === 3} tesla={isReferenceStyle} blue={isBlueReference} tone={productDetailVariant === 4 ? "green" : "apple"} />)}
            </div>
          </div>

          <div className={`${isReferenceStyle ? "mt-5" : "mt-3 border-t border-[#ededed] pt-2"}`}>
            <div className={isReferenceStyle ? "mb-3 flex items-center gap-3" : ""}><p className={`${isReferenceStyle ? "shrink-0 text-[12px] font-medium" : "mb-2 text-[12px] font-medium"} text-[#111]`}>Strength</p>{isReferenceStyle && <span className="h-px flex-1 bg-[#e5e5e5]" />}</div>
            <div className={`grid grid-cols-2 gap-1.5 [&>button]:w-full [&>button]:min-w-0 ${usesWideStrengthCards ? "[&>button]:h-[58px]" : "sm:grid-cols-4"}`}>
              {strengthOptions.map(option => <OptionPill key={option} label={option} subLabel={isCompoundProduct ? "Combined strength" : "150mg total"} selected={strength === option} onClick={() => setStrength(option)} emphasis={productDetailVariant === 2} card={productDetailVariant === 3} tesla={isReferenceStyle} blue={isBlueReference} tone={productDetailVariant === 4 ? "green" : "apple"} />)}
            </div>
          </div>

          {!discountApplied && (
            <div className={`${isReferenceStyle ? "mt-6" : "mt-4"} w-[226px] max-w-full rounded-[14px] border border-white/80 bg-[linear-gradient(135deg,#f3fbf7_0%,#e5f1eb_62%,#fbf8ea_100%)] p-3 shadow-[0_10px_28px_rgba(24,50,41,0.08)]`}>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/55 text-[#315a47]">
                  <Tag size={14} strokeWidth={1.9} />
                </span>
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold leading-[18px] tracking-[-0.02em] text-[#171717]">$25 coupon is ready</p>
                  <p className="mt-1 text-[11px] font-medium leading-[15px] text-[#68736d]">1 active coupon is ready for this product.</p>
                </div>
              </div>
              <button
                type="button"
                disabled={discountApplying}
                onClick={() => {
                  setDiscountApplying(true);
                  window.setTimeout(() => {
                    setDiscountApplied(true);
                    setDiscountApplying(false);
                    showToast("Coupon applied");
                  }, 1000);
                }}
                className="mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-full bg-white text-[11px] font-semibold text-[#171717] shadow-[0_1px_0_rgba(24,50,41,0.04)] transition-colors hover:bg-[#fbfbfb] disabled:cursor-wait disabled:text-[#68736d]"
              >
                {discountApplying && <Loader2 size={13} className="animate-spin text-[#315a47]" />}
                {discountApplying ? "Applying" : "Apply discount"}
              </button>
            </div>
          )}

          <div className={`${isReferenceStyle ? "mt-5" : "mt-3 border-t border-[#ededed] pt-2"}`}>
            <div className={isReferenceStyle ? "mb-3 flex items-center gap-3" : ""}><p className={`${isReferenceStyle ? "shrink-0 text-[12px] font-medium" : "mb-2 text-[12px] font-medium"} text-[#111]`}>{product.dosage === "Injection" ? "Injection Type" : "Form"}</p>{isReferenceStyle && <span className="h-px flex-1 bg-[#e5e5e5]" />}</div>
            <div className="flex flex-wrap gap-2">
              {(product.dosage === "Injection" ? ["Subcutaneous", "Intramuscular"] : [product.dosage]).map(option => <OptionPill key={option} label={option} selected={injType === option} onClick={() => setInjType(option)} emphasis={productDetailVariant === 2} card={productDetailVariant === 3} tesla={isReferenceStyle} blue={isBlueReference} tone={productDetailVariant === 4 ? "green" : "apple"} />)}
            </div>
          </div>

          <div className={`${isReferenceStyle ? "mt-5" : "mt-3 border-t border-[#ededed] pt-2"}`}>
            <div className={isReferenceStyle ? "mb-3 flex items-center gap-3" : ""}><p className={`${isReferenceStyle ? "shrink-0 text-[12px] font-medium" : "mb-2 text-[12px] font-medium"} text-[#111]`}>Pharmacy</p>{isReferenceStyle && <span className="h-px flex-1 bg-[#e5e5e5]" />}</div>
            <div className="space-y-2">
              {pharmacies.slice(0, 2).map(option => {
                const selected = pharmacy === option.name;
                const outlineSelected = productDetailVariant === 4
                  ? "border-2 border-[#00B53F] bg-white shadow-[0_0_0_3px_rgba(0,181,63,0.10)]"
                  : productDetailVariant === 1
                  ? "border-[3px] border-[#4485FF] bg-white"
                  : isBlueReference
                  ? "border-2 border-[#2563EB] bg-white"
                  : isReferenceStyle
                  ? "border-2 border-[#171a20] bg-white"
                  : "border-[#183229] bg-[#eef7f2] shadow-[0_8px_18px_rgba(24,50,41,0.08)]";
                return (
                  <button key={option.name} onClick={() => setPharmacy(option.name)} className={`relative grid w-full grid-cols-[minmax(0,1fr)_90px] items-center border px-3 text-left transition-colors ${isReferenceStyle ? "min-h-[58px] rounded-[8px] py-2.5" : "rounded-[8px] py-3"} ${selected && productDetailVariant === 2 ? "border-[#183229] bg-[#183229] text-white shadow-[0_8px_18px_rgba(24,50,41,0.16)]" : selected ? outlineSelected : "border-[#bdbdbd] bg-white hover:border-[#555]"}`}>
                    {selected && isReferenceStyle && <CheckCircle2 size={18} strokeWidth={2.2} className={`absolute -right-2 -top-2 text-white ${isBlueReference ? "fill-[#2563EB]" : "fill-black"}`} />}
                    <span className="min-w-0">
                      <span className={`flex items-center gap-1.5 truncate text-[12px] font-medium ${selected && productDetailVariant === 2 ? "text-white" : "text-[#111]"}`}>
                        {selected && productDetailVariant === 2 && <CheckCircle2 size={13} className="shrink-0 text-white" />}
                        {option.name}
                      </span>
                      <span className={`mt-0.5 block text-[10px] ${selected && productDetailVariant === 2 ? "text-white/70" : "text-[#777]"}`}>BUD: 90 Days</span>
                    </span>
                    <span className="text-right">
                      <span className={`block text-[12px] font-medium ${selected && productDetailVariant === 2 ? "text-white" : "text-[#111]"}`}>${Math.max(0, option.price + configurationPriceAdjustment).toFixed(2)}</span>
                      <span className={`mt-0.5 block whitespace-nowrap text-[10px] leading-tight ${selected && productDetailVariant === 2 ? "text-white/70" : "text-[#777]"}`}>1–2 Days Processing</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={isReferenceStyle ? "mt-5" : "mt-4 border-t border-[#ededed] pt-4"}>
            {isReferenceStyle ? <div className="mb-3 flex items-center gap-3"><p className="shrink-0 text-[12px] font-medium text-[#111]">Shipping</p><span className="h-px flex-1 bg-[#e5e5e5]" /></div> : <><p className="text-[12px] font-medium text-[#111]">Shipping</p><p className="mt-1 text-[12px] text-[#252525]">Choose where to ship the prescription</p></>}
            {selectedPatientCount > 1 && (
              <p className="mt-2 flex items-center gap-1.5 text-[10px] font-medium leading-[14px] text-[#c2413b]"><TriangleAlert size={13} strokeWidth={2} className="shrink-0" />Ship to Patient is disabled due to multiple patients in cart.</p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              <button disabled={selectedPatientCount > 1} onClick={() => selectShippingChoice("patient")} className={`relative inline-flex h-9 items-center gap-2 border px-3 text-[11px] font-semibold transition-colors ${isReferenceStyle ? "rounded-[7px]" : "rounded-full"} ${selectedPatientCount > 1 ? "cursor-not-allowed border-[#e0e2e1] bg-[#f7f7f6] text-[#a7aaa8] opacity-70" : shippingChoice === "patient" && productDetailVariant === 2 ? "border-[#183229] bg-[#183229] text-white shadow-[0_8px_18px_rgba(24,50,41,0.16)]" : shippingChoice === "patient" ? (productDetailVariant === 4 ? "border-2 border-[#00B53F] bg-white text-[#202020] shadow-[0_0_0_3px_rgba(0,181,63,0.10)]" : productDetailVariant === 1 ? "border-[3px] border-[#4485FF] bg-white text-[#202020]" : isBlueReference ? "border-2 border-[#2563EB] bg-white text-[#171a20]" : isReferenceStyle ? "border-2 border-[#171a20] bg-white text-[#171a20]" : "border-[#183229] bg-[#eef7f2] text-[#183229]") : "border-[#d8dedd] bg-white text-[#6f7782]"}`}>
                {shippingChoice === "patient" && productDetailVariant === 2 && <CheckCircle2 size={13} />}
                {shippingChoice === "patient" && isReferenceStyle && <CheckCircle2 size={18} strokeWidth={2.2} className={`absolute -right-2 -top-2 text-white ${isBlueReference ? "fill-[#2563EB]" : "fill-black"}`} />}
                <User size={13} strokeWidth={1.8} /> Ship to Patient
              </button>
              <button onClick={() => selectShippingChoice("clinic")} className={`relative inline-flex h-9 items-center gap-2 border px-3 text-[11px] font-semibold transition-colors ${isReferenceStyle ? "rounded-[7px]" : "rounded-full"} ${shippingChoice === "clinic" && productDetailVariant === 2 ? "border-[#183229] bg-[#183229] text-white shadow-[0_8px_18px_rgba(24,50,41,0.16)]" : shippingChoice === "clinic" ? (productDetailVariant === 4 ? "border-2 border-[#00B53F] bg-white text-[#202020] shadow-[0_0_0_3px_rgba(0,181,63,0.10)]" : productDetailVariant === 1 ? "border-[3px] border-[#4485FF] bg-white text-[#202020]" : isBlueReference ? "border-2 border-[#2563EB] bg-white text-[#171a20]" : isReferenceStyle ? "border-2 border-[#171a20] bg-white text-[#171a20]" : "border-[#183229] bg-[#eef7f2] text-[#183229]") : "border-[#d8dedd] bg-white text-[#6f7782]"}`}>
                {shippingChoice === "clinic" && productDetailVariant === 2 && <CheckCircle2 size={13} />}
                {shippingChoice === "clinic" && isReferenceStyle && <CheckCircle2 size={18} strokeWidth={2.2} className={`absolute -right-2 -top-2 text-white ${isBlueReference ? "fill-[#2563EB]" : "fill-black"}`} />}
                <Building2 size={13} strokeWidth={1.8} /> Ship to Clinic
              </button>
            </div>
            <p className="mt-2 text-[10px] text-[#7a837f]">{shippingChoice === "clinic" ? "You can select multiple patients for one clinic shipment." : "You can select one patient for this shipment."}</p>
          </div>

          <div className="relative mt-6">
            <button onClick={() => setPatientPickerOpen(current => !current)} className="flex h-11 w-full items-center justify-center rounded-full border border-[#111] bg-white text-[12px] font-medium text-[#111] transition-colors hover:bg-[#fafafa]">
              {selectedPatientCount === 0 ? "Choose patient" : shippingChoice === "clinic" ? "Add another patient" : "Change patient"}
            </button>
            {patientPickerOpen && (
              <div className="absolute inset-x-0 top-12 z-30 overflow-hidden rounded-[10px] border border-[#d8dfdc] bg-white shadow-xl">
                <div className="flex h-10 items-center gap-2 border-b border-[#e8e3df] px-3">
                  <Search size={14} className="text-[#7b8580]" />
                  <input autoFocus value={patientSearch} onChange={event => setPatientSearch(event.target.value)} placeholder="Search patients" className="min-w-0 flex-1 bg-transparent text-[12px] outline-none" />
                </div>
                <div className="max-h-[220px] overflow-y-auto p-1.5">
                  {patientMatches.map(({ patient, id }) => {
                    const selected = selectedPatientIds.has(id);
                    return (
                      <button key={id} onClick={() => { togglePatient(id); setPatientPickerOpen(false); }} className={`w-full rounded-[7px] px-3 py-2.5 text-left transition-colors ${selected ? "bg-[#f3f5f4]" : "hover:bg-[#f8f7f5]"}`}>
                        <span className="flex items-center gap-2">
                          <span className={`block text-[12px] font-semibold ${selected ? "text-[#8a9390]" : "text-[#1a1a1a]"}`}>{patient.firstName} {patient.lastName}</span>
                          {selected && <span className="rounded-full bg-[#dff8fb] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.04em] text-[#0095a8]">In cart</span>}
                        </span>
                        <span className={`mt-0.5 block text-[10px] ${selected ? "text-[#9ba3a0]" : "text-[#777]"}`}>{patient.birthDate} · {patient.gender}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="border-t border-[#e8e3df] p-2">
                  <button onClick={() => { setPatientPickerOpen(false); setCreatePatientOpen(true); }} className="flex h-9 w-full items-center justify-center gap-1.5 rounded-[7px] border border-dashed border-[#b7c2bd] bg-[#fafcfb] text-[11px] font-semibold text-[#183229] transition-colors hover:border-[#183229] hover:bg-[#eef5f1]">
                    <Plus size={13} /> Create new patient
                  </button>
                </div>
              </div>
            )}
          </div>

          {selectedPatientCount > 0 && (
            <div className="mt-3 overflow-hidden rounded-[11px] border border-[#dbe5f5] bg-white shadow-[0_2px_8px_rgba(37,99,235,0.05)]">
              <div className="flex items-center justify-between border-b border-[#dbe5f5] bg-[#f3f7ff] px-3.5 py-2.5">
                <div>
                  <p className="text-[11px] font-semibold text-[#1a1a1a]">Selected patients</p>
                  <p className="mt-0.5 text-[9px] text-[#7a837f]">Set the quantity for each prescription.</p>
                </div>
                <span className="rounded-full bg-[#2563EB] px-2 py-1 text-[9px] font-semibold text-white">{selectedItemCount} item{selectedItemCount === 1 ? "" : "s"}</span>
              </div>
              <div className="divide-y divide-[#e8ebe9]">
                {[...selectedPatientIds].map(id => {
                  const patient = PATIENTS[id];
                  const patientQty = patientQuantities[id] ?? 1;
                  const isExpanded = expandedPatientIds.has(id);
                  const patientAddress = [patient.address1, patient.address2, `${patient.city}, ${patient.state} ${patient.zip}`].filter(Boolean).join(", ");
                  return (
                    <div key={id} className="bg-white px-3.5 py-3 transition-colors hover:bg-[#fcfdfc]">
                      <div className="grid grid-cols-[minmax(0,1fr)_104px_28px] items-center gap-3">
                        <button onClick={() => togglePatientDetails(id)} className="flex min-w-0 items-center gap-2 text-left" aria-expanded={isExpanded}>
                          <span className="min-w-0">
                            <span className="block truncate text-[11px] font-semibold text-[#171917]">{patient.firstName} {patient.lastName}</span>
                            <span className="mt-0.5 block truncate text-[9px] text-[#7a837f]">DOB {patient.birthDate}</span>
                          </span>
                          <ChevronDown size={13} className={`shrink-0 text-[#777] transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        <div className="flex h-9 items-center justify-between rounded-[9px] border border-[#dedede] bg-white px-1">
                          <button onClick={() => updatePatientQuantity(id, -1)} disabled={patientQty === 1} className="flex size-7 items-center justify-center rounded-[7px] text-[#68736d] transition-colors hover:bg-[#eeeeee] disabled:opacity-35" aria-label={`Decrease quantity for ${patient.firstName}`}><Minus size={13} /></button>
                          <span className="min-w-5 text-center text-[12px] font-semibold text-[#1a1a1a]">{patientQty}</span>
                          <button onClick={() => updatePatientQuantity(id, 1)} className="flex size-7 items-center justify-center rounded-[7px] text-[#111] transition-colors hover:bg-[#eeeeee]" aria-label={`Increase quantity for ${patient.firstName}`}><Plus size={13} /></button>
                        </div>
                        <button onClick={() => togglePatient(id)} className="flex size-7 items-center justify-center rounded-[7px] text-[#a35b56] transition-colors hover:bg-[#f4e7e6]" aria-label={`Remove ${patient.firstName} ${patient.lastName}`}><Trash2 size={14} /></button>
                      </div>
                      {isExpanded && (
                        <div className="mt-2 rounded-[8px] border border-[#e4e8e6] bg-[#f7f9f8] px-3 py-2.5 text-[10px] leading-relaxed text-[#666]">
                          <div className="flex items-start gap-2"><MapPin size={12} className="mt-0.5 shrink-0 text-[#333]" /><span>{patientAddress}</span></div>
                          <div className="mt-1.5 flex items-center gap-2"><Phone size={12} className="shrink-0 text-[#333]" /><span>{patient.primaryPhone}</span></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {addedItemCount !== null && (
            <div className="mt-3 flex items-center justify-center gap-2 rounded-[9px] bg-[#edf5f0] px-3 py-2.5 text-[11px] font-semibold text-[#315a47]">
              <CheckCircle2 size={15} strokeWidth={2} />
              {addedItemCount} {addedItemCount === 1 ? "product" : "products"} added to cart
            </div>
          )}

          <button onClick={addToCart} disabled={selectedPatientCount === 0} className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#111] text-[12px] font-medium text-white transition-colors hover:bg-[#28312d] disabled:cursor-not-allowed disabled:bg-[#b8b8b8]">
            {selectedItemCount > 1 ? `Add ${selectedItemCount} items to cart` : "Add to cart"} <ShoppingCart size={14} strokeWidth={1.5} />
          </button>

          <div className="mt-3 overflow-hidden rounded-[9px] bg-[#f7f7f7]">
            <div className="flex h-12 items-center px-4">
              <MapPin size={18} strokeWidth={1.6} className="mr-2 text-[#111]" />
              <span className="text-[9px] leading-tight text-[#777]">Delivered to<br /><strong className="text-[11px] font-semibold text-[#111]">{deliveryState}</strong></span>
              <button onClick={() => setLocationMenuOpen(current => !current)} className="ml-auto text-[10px] font-medium text-[#333] hover:underline">{locationMenuOpen ? "Cancel" : "Change Location"}</button>
            </div>
            {locationMenuOpen && (
              <div className="border-t border-[#e5e5e5] bg-white p-3">
                <label className="mb-1.5 block text-[10px] font-medium text-[#555]">Delivery state</label>
                <div className="relative">
                  <select
                    value={deliveryState}
                    onChange={event => { setDeliveryState(event.target.value); setLocationMenuOpen(false); }}
                    autoFocus
                    className="h-10 w-full appearance-none rounded-[7px] border border-[#cfd3d8] bg-white px-3 pr-9 text-[12px] font-medium text-[#222] outline-none transition-colors focus:border-[#2563EB]"
                  >
                    {deliveryStates.map(state => <option key={state}>{state}</option>)}
                  </select>
                  <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="mt-8 max-w-[1180px] overflow-hidden rounded-[12px] border border-[#e8e3df] bg-white">
        <div className="overflow-x-auto border-b border-[#e8e3df] px-5 sm:px-6">
          <div className="flex min-w-max gap-7" role="tablist" aria-label="Product information">
            {[
              { id: "overview", label: "Overview" },
              { id: "formula", label: "Formula & Benefits" },
              { id: "dosage", label: "Dosage" },
              { id: "safety", label: "Storage & Safety" },
            ].map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeInfoTab === tab.id}
                onClick={() => setActiveInfoTab(tab.id as typeof activeInfoTab)}
                className={`h-12 border-b-2 text-[12px] font-semibold transition-colors ${activeInfoTab === tab.id ? "border-[#183229] text-[#183229]" : "border-transparent text-[#737b77] hover:text-[#183229]"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-6 sm:px-6 lg:px-8">
          {activeInfoTab === "overview" && (
            <div className="max-w-[1050px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#777]">Product reference</p>
              <h2 className="mt-2 text-[20px] font-semibold text-[#1a1a1a]">{product.name}</h2>
              <p className="mt-4 max-w-[850px] text-[13px] leading-6 text-[#555]">{product.name} is a compounded {product.dosage.toLowerCase()} prepared for personalized {product.areaOfTreatment.toLowerCase()} protocols. The dispensing pharmacy prepares the medication according to the selected configuration and patient prescription.</p>

              <div className="mt-6 border-y border-[#e8e3df]">
                <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-4 border-b border-[#e8e3df] py-3 sm:grid-cols-[150px_minmax(0,1fr)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#888]">Selected configuration</p>
                  <p className="text-right text-[12px] font-semibold text-[#111]">${configuredPrice.toFixed(2)}</p>
                </div>
                <dl className="grid sm:grid-cols-2">
                {[
                  ["Strength", strength],
                  ["Size", size],
                  [product.dosage === "Injection" ? "Route" : "Form", injType],
                  ["Pharmacy", selectedPharmacy.name],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[90px_minmax(0,1fr)] gap-3 border-b border-[#eeeae7] py-3 last:border-b-0 sm:odd:border-r sm:odd:pr-5 sm:even:pl-5">
                    <dt className="text-[10px] text-[#888]">{label}</dt>
                    <dd className="text-[11px] font-semibold text-[#222]">{value}</dd>
                  </div>
                ))}
                </dl>
              </div>
            </div>
          )}

          {activeInfoTab === "formula" && (
            <div className="max-w-[1050px]">
              <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Ingredient breakdown & benefits</h2>
              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {[
                  { title: product.name, text: `Configured as ${strength} in a ${size} ${product.dosage.toLowerCase()} format.` },
                  { title: "Treatment area", text: `Prepared for personalized ${product.areaOfTreatment.toLowerCase()} protocols under prescriber direction.` },
                  { title: "Pharmacy preparation", text: `Dispensed by ${selectedPharmacy.name} using the selected product configuration.` },
                ].map(item => (
                  <article key={item.title} className="rounded-[8px] border border-[#e8e3df] p-4">
                    <div className="flex size-8 items-center justify-center rounded-[7px] bg-[#eef5f1] text-[#183229]"><Leaf size={15} /></div>
                    <h3 className="mt-3 text-[13px] font-semibold text-[#1a1a1a]">{item.title}</h3>
                    <p className="mt-2 text-[12px] leading-5 text-[#626d68]">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeInfoTab === "dosage" && (
            <div className="max-w-[1050px]">
              <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Typical dosage and administration</h2>
              <p className="mt-2 text-[12px] leading-5 text-[#626d68]">Administration and dosing instructions are determined by the prescriber for the selected {product.dosage.toLowerCase()} configuration.</p>
              <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#e8e3df]">
                <table className="w-full min-w-[720px] text-left text-[12px]">
                  <thead className="bg-[#f6f4f2] text-[10px] uppercase tracking-[0.08em] text-[#667085]">
                    <tr><th className="px-4 py-3">Goal</th><th className="px-4 py-3">Frequency</th><th className="px-4 py-3">Route</th><th className="px-4 py-3">Notes</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8e3df] text-[#39433f]">
                    <tr><td className="px-4 py-3 font-semibold">Standard protocol</td><td className="px-4 py-3">As prescribed</td><td className="px-4 py-3">{injType}</td><td className="px-4 py-3">{strength}</td></tr>
                    <tr><td className="px-4 py-3 font-semibold">Product form</td><td className="px-4 py-3">Patient specific</td><td className="px-4 py-3">{product.dosage}</td><td className="px-4 py-3">{size}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeInfoTab === "safety" && (
            <div className="max-w-[1050px]">
              <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Storage & safety</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {[
                  ["Beyond use", "90 days unopened or 28 days after first puncture"],
                  ["Storage", "Refrigerate at 36°F to 46°F. Protect from light. Do not freeze."],
                  ["Status", "503A compounded, sterile preparation"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[8px] border border-[#e8e3df] bg-[#fbfaf8] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8c8c8c]">{label}</p>
                    <p className="mt-2 text-[12px] font-semibold leading-5 text-[#1a1a1a]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-[8px] border border-[#f0bd67] bg-[#fff7e8] p-4">
                <AlertCircle size={17} className="mt-0.5 shrink-0 text-[#a45b00]" />
                <div>
                  <h3 className="text-[13px] font-semibold text-[#6f3e00]">Safety warning</h3>
                  <p className="mt-1 text-[12px] leading-5 text-[#744d1c]"><strong>For subcutaneous use only.</strong> Use a fresh sterile needle for every administration. Discard 28 days after first puncture or by the beyond-use date, whichever comes first. Use only as directed by a licensed prescriber.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      </div>
      {questionModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/35 px-4 py-6 backdrop-blur-[2px]" role="dialog" aria-modal="true" aria-labelledby="product-question-title">
          <div className="w-full max-w-[560px] rounded-[18px] border border-[#ece8e3] bg-white p-5 shadow-[0_28px_80px_rgba(0,0,0,0.22)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8c95a1]">Support ticket</p>
                <h2 id="product-question-title" className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111]">Ask a Question</h2>
                <p className="mt-1 text-[12px] leading-5 text-[#6f7782]">We will attach this product setup so the team has the right context.</p>
              </div>
              <button
                type="button"
                onClick={() => setQuestionModalOpen(false)}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full text-[#777] transition-colors hover:bg-[#f5f5f3] hover:text-[#111]"
                aria-label="Close question modal"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            <div className="mt-5 rounded-[14px] border border-[#e8ebe9] bg-[#fafafa] p-3">
              <p className="mb-2 text-[11px] font-medium text-[#6c746f]">Product</p>
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-white">
                  <img src={product.img} alt={product.name} className="h-10 w-10 object-contain mix-blend-multiply" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold text-[#151515]">{product.name}</p>
                  <p className="mt-1 text-[11px] leading-4 text-[#6f7782]">{strength} | {size}</p>
                  <p className="mt-0.5 truncate text-[10px] text-[#8d9591]">{selectedPharmacy.name}</p>
                </div>
                <p className="shrink-0 text-[13px] font-semibold text-[#151515]">${configuredPrice.toFixed(2)}</p>
              </div>
            </div>

            <label className="mt-5 block">
              <span className="text-[12px] font-semibold text-[#171717]">Your Question <span className="text-[#b4473d]">*</span></span>
              <textarea
                value={questionText}
                onChange={(event) => setQuestionText(event.target.value)}
                placeholder="Write..."
                className="mt-2 min-h-[132px] w-full resize-y rounded-[12px] border border-[#d8dedb] bg-white px-3.5 py-3 text-[13px] leading-5 text-[#111] outline-none transition placeholder:text-[#a3aaa6] focus:border-[#183229] focus:ring-2 focus:ring-[#183229]/10"
              />
            </label>

            <div className="mt-3 flex items-start gap-2 rounded-[12px] bg-[#f7f7f5] px-3 py-3">
              <MessageSquare size={15} className="mt-0.5 shrink-0 text-[#183229]" strokeWidth={1.8} />
              <p className="text-[11px] leading-[16px] text-[#66716c]">
                This question will be automatically created as a support ticket and assigned to our team. You'll receive a response within 24 hours.
              </p>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setQuestionModalOpen(false)}
                className="h-10 cursor-pointer rounded-[9px] border border-[#d7ddd9] bg-white px-4 text-[13px] font-semibold text-[#183229] transition-colors hover:bg-[#f7f8f6]"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!questionText.trim()}
                onClick={() => {
                  showToast("Question submitted");
                  setQuestionModalOpen(false);
                  setQuestionText("");
                }}
                className="h-10 cursor-pointer rounded-[9px] bg-[#111] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#183229] disabled:cursor-not-allowed disabled:bg-[#d5d8d6]"
              >
                Submit Question
              </button>
            </div>
          </div>
        </div>
      )}
      {createPatientOpen && (
        <div className="fixed inset-0 z-[80] flex justify-end bg-black/30 backdrop-blur-[2px]">
          <button className="absolute inset-0 cursor-default" onClick={() => setCreatePatientOpen(false)} aria-label="Close create patient" />
          <form
            onSubmit={event => { event.preventDefault(); setCreatePatientOpen(false); }}
            className="relative flex h-full w-full max-w-[680px] flex-col overflow-hidden rounded-l-[16px] border-l border-[#e4e1dd] bg-white shadow-[-18px_0_55px_rgba(0,0,0,0.16)]"
          >
            <div className="flex items-center justify-between border-b border-[#ece9e5] px-6 py-5">
              <div>
                <h2 className="text-[20px] font-semibold text-[#171717]">Create Patient</h2>
                <p className="mt-1 text-[11px] text-[#777]">Enter the patient’s personal and contact information.</p>
              </div>
              <button type="button" onClick={() => setCreatePatientOpen(false)} className="flex size-8 items-center justify-center rounded-full text-[#777] hover:bg-[#f4f2ef]" aria-label="Close"><X size={18} /></button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
              <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
                {[
                  ["First Name", "firstName", "Write...", "text", true],
                  ["Last Name", "lastName", "Write...", "text", true],
                ].map(([label, name, placeholder, type, required]) => (
                  <label key={String(name)} className="block text-[11px] font-medium text-[#242424]">{label} {required && <span className="text-[#b44b42]">*</span>}<input name={String(name)} type={String(type)} required={Boolean(required)} placeholder={String(placeholder)} className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] bg-white px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                ))}
                <label className="block text-[11px] font-medium text-[#242424]">Gender <span className="text-[#b44b42]">*</span><select name="gender" required defaultValue="" className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] bg-white px-3 text-[12px] text-[#555] outline-none focus:border-[#202020]"><option value="" disabled>Select</option><option>Female</option><option>Male</option><option>Other</option></select></label>
                <label className="block text-[11px] font-medium text-[#242424]">Birth Date <span className="text-[#b44b42]">*</span><input name="birthDate" type="date" required className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] bg-white px-3 text-[12px] text-[#555] outline-none focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Primary Phone <span className="text-[#b44b42]">*</span><input name="primaryPhone" type="tel" required placeholder="(000) 000-0000" className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Secondary Phone<input name="secondaryPhone" type="tel" placeholder="(000) 000-0000" className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Address 1 <span className="text-[#b44b42]">*</span><input name="address1" required placeholder="Start typing address..." className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Apt, Floor, etc.<input name="address2" placeholder="Write..." className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">State <span className="text-[#b44b42]">*</span><select name="state" required defaultValue="" className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] bg-white px-3 text-[12px] text-[#555] outline-none focus:border-[#202020]"><option value="" disabled>Select a state</option><option>Florida</option><option>New York</option><option>Texas</option><option>California</option></select></label>
                <label className="block text-[11px] font-medium text-[#242424]">City <span className="text-[#b44b42]">*</span><input name="city" required placeholder="Write..." className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Zip Code <span className="text-[#b44b42]">*</span><input name="zip" required placeholder="Write..." className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Allergies<input name="allergies" placeholder="Write..." className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Email<input name="email" type="email" placeholder="Write..." className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]" /></label>
                <label className="block text-[11px] font-medium text-[#242424]">Language<select name="language" defaultValue="" className="mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] bg-white px-3 text-[12px] text-[#555] outline-none focus:border-[#202020]"><option value="" disabled>Select</option><option>English</option><option>Spanish</option><option>Albanian</option></select></label>
              </div>

              <div className="mt-5 border-t border-[#ece9e5] pt-5">
                <h3 className="text-[12px] font-semibold text-[#242424]">BMI Classification</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <label className="block text-[11px] font-medium text-[#242424]">Weight<div className="mt-1.5 flex gap-2"><input name="weight" type="number" min="0" placeholder="Write..." className="h-10 min-w-0 flex-1 rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none focus:border-[#202020]" /><select name="weightUnit" className="h-10 w-20 rounded-[9px] border border-[#dddcd8] bg-white px-2 text-[12px]"><option>lb</option><option>kg</option></select></div></label>
                  <label className="block text-[11px] font-medium text-[#242424]">Height<div className="mt-1.5 flex gap-2"><input name="height" type="number" min="0" placeholder="Write..." className="h-10 min-w-0 flex-1 rounded-[9px] border border-[#dddcd8] px-3 text-[12px] outline-none focus:border-[#202020]" /><select name="heightUnit" className="h-10 w-20 rounded-[9px] border border-[#dddcd8] bg-white px-2 text-[12px]"><option>in</option><option>cm</option></select></div></label>
                </div>
              </div>
            </div>

            <div className="border-t border-[#ece9e5] bg-white px-6 py-4">
              <button type="submit" className="h-11 w-full rounded-[8px] bg-[#111] px-6 text-[12px] font-semibold text-white hover:bg-black">Save Patient</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

const RECENT_ORDERS = [
  { id: "ORD-0041", patient: "Sarah M.", product: "NAD+ Injection", status: "Delivered", date: "Jul 8", total: "$55.88" },
  { id: "ORD-0040", patient: "John R.", product: "Testosterone Cyp", status: "Shipped", date: "Jul 7", total: "$135.99" },
  { id: "ORD-0039", patient: "Emily K.", product: "Semaglutide", status: "Processing", date: "Jul 7", total: "$180.00" },
  { id: "ORD-0038", patient: "David L.", product: "BPC-157", status: "Pending", date: "Jul 6", total: "$75.00" },
  { id: "ORD-0037", patient: "Maria S.", product: "Sermorelin", status: "Delivered", date: "Jul 5", total: "$110.00" },
];

function DashboardPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <>
      <Header title="Dashboard" onNavigate={onNavigate} />

      <section className="mb-6 grid grid-cols-4 gap-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {[
          { label: "Total orders", value: "1,284", delta: "+12.5% this month", icon: Package, bg: "bg-[#f5f8f6]", color: "text-[#31584A]" },
          { label: "Active patients", value: "348", delta: "+3.2% this month", icon: Users, bg: "bg-[#fafafa]", color: "text-[#31584A]" },
          { label: "Revenue this month", value: "$24,192", delta: "+8.7% this month", icon: CreditCard, bg: "bg-[#f7f8f6]", color: "text-[#665E28]" },
          { label: "Open tickets", value: "17", delta: "2 need attention", icon: MessageSquare, bg: "bg-[#fff7f2]", color: "text-[#8A4338]" },
        ].map(({ label, value, delta, icon: Icon, bg, color }) => (
          <article key={label} className="flex min-h-[116px] items-center gap-4 rounded-[14px] border border-[#efefec] bg-white p-4">
            <span className={`flex size-12 shrink-0 items-center justify-center rounded-[13px] ${bg} ${color}`}><Icon size={19} strokeWidth={1.7} /></span>
            <div><p className="text-[11px] font-medium text-[#858b88]">{label}</p><p className="mt-1 text-[23px] font-semibold tracking-[-0.03em] text-[#1a1a1a]">{value}</p><p className={`mt-1 text-[10px] font-medium ${color}`}>{delta}</p></div>
          </article>
        ))}
      </section>

      <div className="mb-6 grid grid-cols-[minmax(0,1fr)_310px] gap-4 max-lg:grid-cols-1">
        <section className="rounded-[14px] bg-[#FBFBFB] p-2">
          <div className="flex items-center justify-between px-3 py-3">
            <div><h2 className="text-[15px] font-semibold text-[#1a1a1a]">Recent orders</h2><p className="mt-1 text-[10px] text-[#929694]">Latest prescriptions submitted by your clinic.</p></div>
            <button onClick={() => onNavigate("orders")} className="flex items-center gap-1 text-[11px] font-semibold text-[#183229] transition-opacity hover:opacity-70">View all <ChevronRight size={13} /></button>
          </div>
          <div className="space-y-2">
            {RECENT_ORDERS.map((order) => {
              const statusClass = order.status === "Delivered" ? "bg-[#ecf8ef] text-[#31583F]" : order.status === "Pending" ? "bg-[#fff4eb] text-[#8A4338]" : "bg-[#edf6f2] text-[#31584A]";
              return (
                <button key={order.id} onClick={() => onNavigate("orders")} className="grid w-full grid-cols-[minmax(160px,1fr)_minmax(130px,.9fr)_104px_70px_72px_20px] items-center gap-3 rounded-[11px] bg-white px-3 py-3 text-left transition-colors hover:bg-[#fffcfa] max-md:grid-cols-[1fr_auto_18px]">
                  <span className="min-w-0"><span className="block truncate text-[11px] font-semibold text-[#252525]">{order.patient}</span><span className="mt-0.5 block text-[9px] text-[#999]">{order.id}</span></span>
                  <span className="truncate text-[11px] text-[#5f6461] max-md:hidden">{order.product}</span>
                  <span className={`w-fit rounded-full px-2.5 py-1.5 text-[9px] font-semibold ${statusClass}`}>{order.status}</span>
                  <span className="text-[10px] text-[#999] max-md:hidden">{order.date}</span>
                  <span className="text-right text-[11px] font-semibold text-[#252525] max-md:hidden">{order.total}</span>
                  <ChevronRight size={14} className="text-[#a2a5a3]" />
                </button>
              );
            })}
          </div>
        </section>

        <aside className="rounded-[14px] border border-[#efefec] bg-white p-5">
          <div className="flex items-center justify-between"><div><h2 className="text-[15px] font-semibold text-[#1a1a1a]">Activity</h2><p className="mt-1 text-[10px] text-[#929694]">What changed recently.</p></div><span className="flex size-8 items-center justify-center rounded-full bg-white text-[#183229]"><Bell size={14} /></span></div>
          <div className="mt-5 space-y-1">
            {[
              { icon: CheckCircle2, text: "Order ORD-0041 delivered", time: "2h ago", bg: "bg-[#ecf8ef]", color: "text-[#31583F]" },
              { icon: Truck, text: "Order ORD-0040 shipped", time: "5h ago", bg: "bg-[#edf6f2]", color: "text-[#31584A]" },
              { icon: AlertCircle, text: "Low stock: BPC-157", time: "1d ago", bg: "bg-[#fafafa]", color: "text-[#6E642A]" },
              { icon: User, text: "New patient: Mark T.", time: "1d ago", bg: "bg-[#f7f8f6]", color: "text-[#31584A]" },
              { icon: MessageSquare, text: "Ticket #89 opened", time: "2d ago", bg: "bg-[#fff7f2]", color: "text-[#8A4338]" },
            ].map(({ icon: Icon, text, time, bg, color }) => (
              <div key={text} className="flex items-center gap-3 rounded-[10px] px-1 py-2.5">
                <span className={`flex size-8 shrink-0 items-center justify-center rounded-[9px] ${bg} ${color}`}><Icon size={14} /></span>
                <div className="min-w-0"><p className="truncate text-[11px] font-medium text-[#252525]">{text}</p><p className="mt-0.5 text-[9px] text-[#999]">{time}</p></div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <section className="rounded-[14px] bg-[#FBFBFB] p-2">
        <div className="flex items-center justify-between px-3 py-3"><div><h2 className="text-[15px] font-semibold text-[#1a1a1a]">Top products</h2><p className="mt-1 text-[10px] text-[#929694]">Frequently ordered by your clinic.</p></div><button onClick={() => onNavigate("products")} className="flex items-center gap-1 text-[11px] font-semibold text-[#183229] hover:opacity-70">Browse catalog <ChevronRight size={13} /></button></div>
        <div className="grid grid-cols-6 gap-2 max-xl:grid-cols-3 max-md:grid-cols-2">
          {ALL_PRODUCTS.slice(0, 6).map((product) => (
            <button key={product.id} onClick={() => onNavigate("product-detail")} className="group rounded-[11px] bg-white px-3 pb-2.5 pt-2 text-left transition-colors hover:bg-[#fffefd]">
              <div className="flex h-[84px] items-center justify-center overflow-hidden rounded-[9px] bg-[#FCFCFC]"><img src={product.img} alt={product.name} className="h-[92%] max-w-full object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.04]" /></div>
              <p className="mt-2 truncate text-[10px] font-semibold leading-4 text-[#252525]">{product.name}</p>
              <div className="mt-1 flex items-center justify-between"><span className="text-[11px] font-semibold text-[#1a1a1a]">{product.price}</span><span className="flex size-5 items-center justify-center rounded-full bg-[#f2f1ee] text-[#183229]"><ChevronRight size={11} /></span></div>
            </button>
          ))}
        </div>
      </section>

    </>
  );
}

// ─── Orders ───────────────────────────────────────────────────────────────────

const ORDERS = [
  {
    id: "#CEF164",
    status: "Pending Payment",
    orderType: "ORDER",
    timestamp: "07/11/2026 - 1:44 PM",
    payMethod: "Pay by Patient",
    payStatus: "UNPAID",
    shipMethod: "Ship to Clinic",
    total: "$548.52",
    patientNames: ["Zeee Rabushaj", "Altin Selimi"],
    patient: { name: "Zeee Rabushaj", gender: "M", address: "95 Windermere Drive, Westchester County, NY 10710", phone: "(646)-389-7766" },
    patients: [
      { name: "Zeee Rabushaj", gender: "M", address: "95 Windermere Drive, Westchester County, NY 10710", phone: "(646)-389-7766" },
      { name: "Altin Selimi", gender: "M", address: "95 Windermere Drive, Yonkers, NY 10710", phone: "(646)-617-9881" },
    ],
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
	      { patientName: "Zeee Rabushaj", name: "Tirzepatide/Pyridoxine (B6)", description: "1 (0.5mL) Vial | 20mg/25mg/mL", pharmacy: "1st Choice Compounding Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$125.43", image: blankVialReference },
	      { patientName: "Zeee Rabushaj", name: "5-Amino-1mq/NMN", description: "30 Capsules | 25mg/500mg", pharmacy: "1st Choice Compounding Pharmacy", tracking: "Tracking Not Ready", qty: 30, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$171.80", image: img431 },
	      { patientName: "Altin Selimi", name: "Bremelanotide (PT-141)", description: "1 (10mL) Bottle | 10mg/mL", pharmacy: "Precision Compounding Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$118.80", image: imgProduct452 },
	      { patientName: "Altin Selimi", name: "Aminoblend", description: "1 (30mL) Vial | 100mg/50mg/50mg/50mg/100mg/mL", pharmacy: "Thesis Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 2, refillsLeft: 0, daysSupply: 1, price: "$35.99", image: img432 },
    ],
  },
  {
    id: "#BCF445",
    status: "Pending Approval",
    orderType: "ORDER",
    timestamp: "07/11/2026 - 1:21 PM",
    payMethod: "Pay by Patient",
    payStatus: "UNPAID",
    shipMethod: "Ship to Clinic",
    total: "$156.56",
    patientNames: ["Zeee Rabushaj"],
    patient: { name: "Zeee Rabushaj", gender: "M", address: "95 Windermere Drive, Westchester County, NY 10710", phone: "(646)-389-7766" },
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
      { name: "Tesamorelin/Ipamorelin", description: "1 (5mL) Vial | 2.4mg/1.2mg/mL", pharmacy: "Optimal Balance Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$135.36", image: imgPT141 },
    ],
  },
  {
    id: "#EB5790",
    status: "Processing",
    orderType: "ORDER",
    timestamp: "07/07/2026 - 09:02 AM",
    payMethod: "Pay by Clinic",
    payStatus: "PAID",
    shipMethod: "Ship to Clinic",
    total: "$180.00",
    patientNames: ["Emily Krause"],
    patient: { name: "Emily Krause", gender: "F", address: "302 Maple Ave, Brooklyn, NY 11201", phone: "(718)-555-0187" },
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
      { name: "Semaglutide", description: "2 Vials | 5mg/mL", pharmacy: "Precision Compounding", tracking: "Tracking Not Ready", qty: 2, authRefills: 5, refillsLeft: 5, daysSupply: 60, price: "$180.00", image: img434 },
    ],
  },
  {
    id: "#EB5778",
    status: "Shipped",
    orderType: "ORDER",
    timestamp: "07/07/2026 - 08:15 AM",
    payMethod: "Pay by Patient",
    payStatus: "PAID",
    shipMethod: "Ship to Patient",
    total: "$135.99",
    patientNames: ["John Reynolds"],
    patient: { name: "John Reynolds", gender: "M", address: "88 Park Blvd, Queens, NY 11375", phone: "(718)-555-0143" },
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
      { name: "Testosterone Cypionate", description: "1 Vial | 200mg/mL", pharmacy: "Rush Pharmacy FL", tracking: "TRACK-774412", qty: 1, authRefills: 11, refillsLeft: 10, daysSupply: 28, price: "$135.99", image: img452dash },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="text-[#c0c0c0] hover:text-[#183229] transition-colors flex-shrink-0"
      onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }}
      title={copied ? "Copied!" : "Copy"}
    >
      {copied
        ? <CheckCircle2 size={11} className="text-[#183229]" />
        : <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.1"/><path d="M1.5 7.5V1.5H7.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
      }
    </button>
  );
}

function OrdersPage({ onNavigate, onOrderSelect, extraVariants }: { onNavigate: (p: Page) => void; onOrderSelect: (order: typeof ORDERS[number]) => void; extraVariants: boolean }) {
  const [filter, setFilter] = useState("Pending Payment");
  const [search, setSearch] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(ORDERS[0]?.id ?? "");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    ORDERS.forEach((order) => order.items.forEach((item, index) => { init[`${order.id}-${index}`] = item.qty; }));
    return init;
  });
  const [shippingMethod, setShippingMethod] = useState<"standard" | "overnight">("standard");
  const [reviewOpen, setReviewOpen] = useState(false);
  const [orderCardVariant, setOrderCardVariant] = useState<"current" | "cart" | "optimized" | "silver" | "multi">("multi");

  useEffect(() => {
    if (!extraVariants) setOrderCardVariant("multi");
  }, [extraVariants]);

  const tabs = ["Overall", "Pending Payment", "Pending Approval", "Cancellation Requested", "Processing", "Pending eScript", "Shipped", "Delivered", "Flagged", "Cancelled"];

  const statusPillStyle: Record<string, string> = {
    "Pending Payment": "bg-gradient-to-r from-[#FFE2D2] to-[#FFF45C] text-[#56203B]",
    "Pending Approval": "bg-gradient-to-r from-[#FFE2D2] to-[#FFF45C] text-[#56203B]",
    "Cancellation Requested": "bg-gradient-to-r from-[#FFB78E] to-[#F07A00] text-[#56203B]",
    Processing: "bg-gradient-to-r from-[#FFE5A8] to-[#F07A00] text-[#56203B]",
    "Pending eScript": "bg-[#E8E5B0] text-[#31583F]",
    Shipped: "bg-[#292B78] text-[#C9F4F5]",
    Delivered: "bg-[#31583F] text-[#F1EFD9]",
    Flagged: "bg-[#7B003B] text-[#FFE8EE]",
    Cancelled: "bg-[#56203B] text-[#FFE7D6]",
  };

  const silverStatusPillStyle: Record<string, string> = {
    Processing: "bg-[#FFC55B] text-[#151515]",
    "Pending Payment": "bg-[#F20D17] text-white",
    "Pending Approval": "bg-[#F20D17] text-white",
    Cancelled: "bg-[#F20D17] text-white",
    Flagged: "bg-[#F20D17] text-white",
    Shipped: "bg-[#3269E8] text-white",
    Delivered: "bg-[#0AB53B] text-white",
    Test: "bg-[#F6DF5C] text-[#151515]",
  };

  function silverStatusIcon(status: string) {
    if (status === "Processing") return <RefreshCw size={13} />;
    if (status === "Pending Payment" || status === "Pending Approval") return <CreditCard size={13} />;
    if (status === "Cancelled") return <AlertCircle size={13} />;
    if (status === "Flagged") return <Flag size={13} />;
    if (status === "Shipped") return <Send size={13} />;
    if (status === "Delivered") return <CheckCircle2 size={13} />;
    return <Package size={13} />;
  }

  const overallOrders = ORDERS.slice(0, 3);
  const filtered = (filter === "Overall" ? overallOrders : ORDERS).filter((order) => {
    const matchesTab = filter === "Overall" || order.status === filter;
    const query = search.toLowerCase();
    const matchesSearch = !query || order.id.toLowerCase().includes(query) || order.patient.name.toLowerCase().includes(query) || order.items.some((item) => item.name.toLowerCase().includes(query));
    return matchesTab && matchesSearch;
  });

  useEffect(() => {
    if (filtered.length > 0 && !filtered.some((order) => order.id === selectedOrderId)) {
      setSelectedOrderId(filtered[0].id);
    }
  }, [filtered, selectedOrderId]);

  const selectedOrder = filtered.find((order) => order.id === selectedOrderId) ?? filtered[0] ?? ORDERS[0];
  const shipping = shippingMethod === "standard" ? 29.99 : 49.99;
  const subtotal = selectedOrder.items.reduce((sum, item, index) => {
    const key = `${selectedOrder.id}-${index}`;
    const unitPrice = Number(item.price.replace(/[$,]/g, "")) || 0;
    return sum + unitPrice * (quantities[key] ?? item.qty);
  }, 0);
  const convenienceFee = selectedOrder.payStatus === "PAID" ? 0 : Math.round(subtotal * 0.045 * 100) / 100;
  const total = subtotal + shipping + convenienceFee;

  function tabCount(tab: string) {
    return tab === "Overall" ? overallOrders.length : ORDERS.filter((order) => order.status === tab).length;
  }

  function updateQty(key: string, delta: number) {
    setQuantities((prev) => ({ ...prev, [key]: Math.max(1, (prev[key] ?? 1) + delta) }));
  }

  function labelCase(value: string) {
    const lower = value.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
      <Header title="Orders" onNavigate={onNavigate} />

      <div className="max-w-[1300px]">
      <div className="mb-5 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[13px] text-[#6f7782]">Track payment status, shipping destination, prescriptions, and fulfillment state.</p>
          </div>
          <div className="group flex h-[38px] w-full items-center gap-2 rounded-[9px] border border-[#cfcfcf] bg-white px-3 transition-all duration-300 ease-out focus-within:border-2 focus-within:border-black sm:w-[220px] sm:focus-within:w-[310px]">
            <Search size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#686868] transition-transform duration-300 group-focus-within:scale-110" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-[#1a1a1a] outline-none placeholder:font-medium placeholder:text-[#686868]"
              placeholder="Search by order, patient, or item"
            />
            <span className="shrink-0 text-[10px] text-[#686868]">⌘ F</span>
          </div>
        </div>

        <div className="flex items-end gap-4 overflow-x-auto border-b border-[#e3e3e3] px-1">
          {tabs.map((tab) => {
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative h-[46px] whitespace-nowrap px-0.5 text-[12px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:transition-colors ${
                  isActive ? "text-[#171717] after:bg-[#183229]" : "text-[#555] after:bg-transparent hover:text-[#171717]"
                }`}
              >
                <span>{tab}</span>
                <span className={`ml-1.5 inline-flex size-[18px] items-center justify-center rounded-full text-[9px] font-semibold ${isActive ? "bg-[#183229] text-white" : "bg-[#eeeeec] text-[#777]"}`}>{tabCount(tab)}</span>
              </button>
            );
          })}
        </div>

        {extraVariants && <div className="flex items-center gap-2 pt-1">
          <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#888]">Card style</span>
	          {(["silver", "cart", "multi"] as const).map(variant => (
	            <button
	              key={variant}
	              onClick={() => setOrderCardVariant(variant)}
	              className={`h-8 rounded-full px-3 text-[11px] font-semibold capitalize transition-colors ${orderCardVariant === variant ? "bg-[#111] text-white" : "border border-[#ddd] bg-white text-[#555] hover:border-[#999]"}`}
	            >
	              {variant === "cart" ? "Cart style" : variant === "multi" ? "Patient lanes" : "Current"}
	            </button>
	          ))}
        </div>}

      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-[#e8e8e8] rounded-[10px] flex flex-col items-center justify-center py-16">
          <Package size={32} className="text-[#d0d0d0] mb-3" />
          <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">No orders found</p>
          <p className="text-[12px] text-[#9d9d9d]">No orders match the current filter.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((order) => {
            if (orderCardVariant === "cart") {
              const orderPatients = "patients" in order ? order.patients : [order.patient];
              const hasMultiplePatients = orderPatients.length > 1;
              const compactImages = [imgOrderAminoQuad, imgOrderOxytocin, imgOrderOxytocinAlt, imgOrderAminoQuad];
              const compactRows = orderPatients.length > 1
                ? orderPatients.map((patient, index) => ({
                    patient,
                    item: order.items[index] ?? order.items[0],
                    image: compactImages[index] ?? order.items[index]?.image ?? order.items[0].image,
                    index,
                  }))
                : order.items.map((item, index) => ({
                    patient: orderPatients[0],
                    item,
                    image: compactImages[index] ?? item.image,
                    index,
                  }));
              return (
                <section key={order.id} onClick={() => onOrderSelect(order)} className="cursor-pointer rounded-[10px] bg-[#F8F8F8] px-5 py-5 transition-colors hover:bg-[#f6f6f5]">
                  <div className="mb-2 hidden grid-cols-[minmax(310px,1.05fr)_minmax(260px,1fr)_minmax(240px,0.9fr)_70px] gap-7 px-5 md:grid">
                    <p className="text-[12px] font-semibold text-[#555]">Prescription</p>
                    <p className="text-[12px] font-semibold text-[#555]">Patient</p>
                    <p className="text-[12px] font-semibold text-[#555]">Pharmacy</p>
                    <p className="text-right text-[12px] font-semibold text-[#555]">Price</p>
                  </div>

                  <div className={hasMultiplePatients ? "overflow-hidden rounded-[9px] bg-white" : "space-y-3"}>
                    {compactRows.map(({ item, patient, image, index }) => {
                      const trackingBlue = index % 2 === 1;
                      return (
                        <div key={`${order.id}-${patient.name}-${item.name}-${index}`} className={`grid items-center gap-7 bg-white px-5 md:grid-cols-[minmax(310px,1.05fr)_minmax(260px,1fr)_minmax(240px,0.9fr)_70px] ${hasMultiplePatients ? "min-h-[104px] py-3" : "min-h-[122px] rounded-[9px] py-5"}`}>
                          <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-[70px] w-[58px] shrink-0 items-center justify-center overflow-visible">
                              <img src={image} alt="" className="max-h-[70px] max-w-[52px] object-contain" />
                            </div>
                            <div className="min-w-0">
                            <p className="truncate text-[14px] font-semibold text-[#161a18]">{item.name}</p>
                            <p className="mt-1 truncate text-[12px] text-[#777]">{item.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              <span className="rounded-full bg-[#f3f3f3] px-2 py-1 text-[9px] text-[#555]">Qty {item.qty}</span>
                              <span className="rounded-full bg-[#f3f3f3] px-2 py-1 text-[9px] text-[#555]">Auth refills {item.authRefills}</span>
                              <span className="rounded-full bg-[#f3f3f3] px-2 py-1 text-[9px] text-[#555]">Refills left {item.refillsLeft}</span>
                              <span className="rounded-full bg-[#f3f3f3] px-2 py-1 text-[9px] text-[#555]">Days {item.daysSupply}</span>
                            </div>
                            </div>
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-[14px] font-medium text-[#161a18]">{patient.name} ({patient.gender})</p>
                            <p className="mt-1.5 truncate text-[11px] text-[#444]">{patient.phone}</p>
                            <p className="mt-1 truncate text-[11px] text-[#444]">{patient.address}</p>
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-[12px] font-normal text-[#777]">{item.pharmacy}</p>
                            <span className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold ${trackingBlue ? "bg-[#F6F6FF] text-[#4169E8]" : "bg-[#ECEBE3] text-[#2f3d35]"}`}>
                              {trackingBlue && <Send size={13} strokeWidth={1.8} />}
                              {labelCase(item.tracking)}
                            </span>
                          </div>
                          <p className="self-start pt-1 text-right text-[14px] font-semibold text-[#161a18]">{item.price}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3 px-1">
                    <span className="mr-1 text-[15px] font-bold text-[#161a18]">{order.id}</span>
                    <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[#F1F0EF] px-3 text-[12px] font-semibold text-[#183229]">
                      Order Type
                      <span className="inline-flex h-6 items-center rounded-full bg-white px-2.5 text-[11px] font-semibold text-[#111]">{labelCase(order.orderType)}</span>
                    </span>
                    <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[#F1F0EF] px-3 text-[12px] font-semibold text-[#183229]">
                      Order Timestamp
                      <span className="inline-flex h-6 items-center rounded-full bg-white px-2.5 text-[11px] font-semibold text-[#111]">{order.timestamp}</span>
                    </span>
                    <span className={`inline-flex h-8 items-center gap-2 rounded-full px-3 text-[11px] font-semibold ${order.payMethod === "Pay by Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
                      {order.payMethod.replace("by", "By")}
                      {order.payMethod === "Pay by Clinic" ? <Building2 size={13} /> : <User size={13} />}
                      <span className={`rounded-full px-2 py-1 text-[8px] font-bold ${order.payStatus === "PAID" ? "bg-white text-[#173d25]" : "bg-[#FF4A87] text-white"}`}>{order.payStatus}</span>
                    </span>
                    <span className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold ${silverStatusPillStyle[order.status] ?? "bg-[#FFC55B] text-[#151515]"}`}>{labelCase(order.status)} {silverStatusIcon(order.status)}</span>
                    <span className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold ${order.shipMethod === "Ship to Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
                      {order.shipMethod.replace("to", "To")} {order.shipMethod === "Ship to Clinic" ? <Building2 size={13} /> : <User size={13} />}
                    </span>
                    <span className="ml-auto inline-flex h-9 items-center gap-2 rounded-full bg-[#F1F0EF] px-3 text-[12px] font-semibold text-[#183229]">
                      Total
                      <strong className="inline-flex h-6 items-center rounded-full bg-white px-2.5 text-[11px] font-semibold text-[#111]">{order.total}</strong>
                    </span>
                  </div>
	                </section>
	              );
	            }

	            if (orderCardVariant === "multi") {
	              const orderPatients = "patients" in order ? order.patients : [order.patient];
	              const patientGroups = orderPatients.map((patient) => ({
	                patient,
	                items: order.items
	                  .map((item, index) => ({ item, index }))
	                  .filter(({ item, index }) => {
	                    const assignedName = (item as { patientName?: string }).patientName;
	                    return assignedName ? assignedName === patient.name : orderPatients[index]?.name === patient.name || (orderPatients.length === 1 && index >= 0);
	                  }),
	              })).filter(group => group.items.length > 0);
	              const groups = patientGroups.length > 0
	                ? patientGroups
	                : orderPatients.map((patient, patientIndex) => ({
	                    patient,
	                    items: order.items
	                      .map((item, index) => ({ item, index }))
	                      .filter((_, index) => index === patientIndex),
	                  })).filter(group => group.items.length > 0);
	              const productCount = order.items.length;

	              return (
	                <section key={order.id} onClick={() => onOrderSelect(order)} className="cursor-pointer rounded-[14px] bg-[#F8F8F8] p-4 transition-colors hover:bg-[#f5f5f4]">
	                  <div className="flex flex-wrap items-center gap-3 px-1 pb-4">
	                    <span className="mr-1 text-[15px] font-bold text-[#161a18]">{order.id}</span>
	                    <span className={`inline-flex h-8 items-center gap-2 rounded-full px-3 text-[11px] font-semibold ${order.payMethod === "Pay by Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
	                      {order.payMethod.replace("by", "By")}
	                      {order.payMethod === "Pay by Clinic" ? <Building2 size={13} /> : <User size={13} />}
	                      <span className={`rounded-full px-2 py-1 text-[8px] font-bold ${order.payStatus === "PAID" ? "bg-white text-[#173d25]" : "bg-[#FF4A87] text-white"}`}>{order.payStatus}</span>
	                    </span>
	                    <span className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold ${silverStatusPillStyle[order.status] ?? "bg-[#FFC55B] text-[#151515]"}`}>{labelCase(order.status)} {silverStatusIcon(order.status)}</span>
	                    <span className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold ${order.shipMethod === "Ship to Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
	                      {order.shipMethod.replace("to", "To")} {order.shipMethod === "Ship to Clinic" ? <Building2 size={13} /> : <User size={13} />}
	                    </span>
	                    <span className="inline-flex h-8 items-center rounded-full bg-white px-3 text-[11px] font-semibold text-[#60656d]">{groups.length} patients</span>
	                    <span className="inline-flex h-8 items-center rounded-full bg-white px-3 text-[11px] font-semibold text-[#60656d]">{productCount} prescriptions</span>
	                    <span className="ml-auto text-[15px] font-semibold text-[#161a18]">{order.total}</span>
	                  </div>

	                  <div className="space-y-3">
	                    {groups.map(({ patient, items }, groupIndex) => {
	                      const patientTotal = items.reduce((sum, { item }) => sum + Number(item.price.replace(/[$,]/g, "")), 0);
	                      return (
	                        <article key={`${order.id}-${patient.name}`} className="rounded-[13px] bg-white p-4">
	                          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#F1F1EF] pb-3">
	                            <div className="flex min-w-0 items-start gap-3">
	                              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F1F0EF] text-[12px] font-semibold text-[#183229]">{groupIndex + 1}</span>
	                              <div className="min-w-0">
	                                <div className="flex flex-wrap items-center gap-2">
	                                  <p className="truncate text-[14px] font-semibold text-[#161a18]">{patient.name} ({patient.gender})</p>
	                                  <span className="rounded-full bg-[#F8F8F8] px-2.5 py-1 text-[10px] font-semibold text-[#60656d]">{items.length} prescription{items.length === 1 ? "" : "s"}</span>
	                                </div>
	                                <p className="mt-1 text-[11px] text-[#5d6470]">{patient.phone}</p>
	                                <p className="mt-1 text-[11px] leading-[1.35] text-[#5d6470]">{patient.address}</p>
	                              </div>
	                            </div>
	                            <div className="rounded-full bg-[#F8F8F8] px-3 py-2 text-[11px] font-semibold text-[#60656d]">
	                              Patient total <span className="ml-2 text-[#161a18]">${patientTotal.toFixed(2)}</span>
	                            </div>
	                          </div>

	                          <div className="mt-3 grid gap-3 lg:grid-cols-2">
	                            {items.map(({ item, index }) => (
	                              <div key={`${order.id}-${patient.name}-${item.name}-${index}`} className="rounded-[11px] bg-[#FAFAFA] p-3">
	                                <div className="flex min-w-0 items-start gap-3">
	                                  <div className="flex h-[72px] w-[58px] shrink-0 items-center justify-center overflow-visible rounded-[9px] bg-white">
	                                    <img src={item.image} alt="" className="max-h-[70px] max-w-[52px] object-contain mix-blend-multiply" />
	                                  </div>
	                                  <div className="min-w-0 flex-1">
	                                    <div className="flex items-start justify-between gap-3">
	                                      <div className="min-w-0">
	                                        <p className="truncate text-[14px] font-semibold text-[#161a18]">{item.name}</p>
	                                        <p className="mt-1 truncate text-[12px] text-[#777]">{item.description}</p>
	                                      </div>
	                                      <p className="shrink-0 text-[13px] font-semibold text-[#161a18]">{item.price}</p>
	                                    </div>
	                                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
	                                      <span className="rounded-full bg-white px-2 py-1 text-[9px] text-[#555]">Qty {item.qty}</span>
	                                      <span className="rounded-full bg-white px-2 py-1 text-[9px] text-[#555]">Auth {item.authRefills}</span>
	                                      <span className="rounded-full bg-white px-2 py-1 text-[9px] text-[#555]">Refills {item.refillsLeft}</span>
	                                      <span className="rounded-full bg-white px-2 py-1 text-[9px] text-[#555]">Days {item.daysSupply}</span>
	                                    </div>
	                                    <div className="mt-3 flex flex-wrap items-center gap-2">
	                                      <p className="truncate text-[11px] text-[#777]">{item.pharmacy}</p>
	                                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold ${(groupIndex + index) % 2 === 1 ? "bg-[#F6F6FF] text-[#4169E8]" : "bg-[#ECEBE3] text-[#2f3d35]"}`}>
	                                        {(groupIndex + index) % 2 === 1 && <Send size={12} strokeWidth={1.8} />}
	                                        {labelCase(item.tracking)}
	                                      </span>
	                                    </div>
	                                  </div>
	                                </div>
	                              </div>
	                            ))}
	                          </div>
	                        </article>
	                      );
	                    })}
	                  </div>

	                  <div className="mt-4 flex flex-wrap items-center gap-3 px-1">
	                    <span className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3 text-[12px] font-semibold text-[#183229]">
	                      Order Type
	                      <span className="inline-flex h-6 items-center rounded-full bg-[#F1F0EF] px-2.5 text-[11px] font-semibold text-[#111]">{labelCase(order.orderType)}</span>
	                    </span>
	                    <span className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3 text-[12px] font-semibold text-[#183229]">
	                      Order Timestamp
	                      <span className="inline-flex h-6 items-center rounded-full bg-[#F1F0EF] px-2.5 text-[11px] font-semibold text-[#111]">{order.timestamp}</span>
	                    </span>
	                  </div>
	                </section>
	              );
	            }

	            return (
            <section key={order.id} onClick={() => onOrderSelect(order)} className={`cursor-pointer overflow-hidden ${orderCardVariant === "current" ? "rounded-[13px] border border-[#e5ddd5] bg-white" : orderCardVariant === "silver" ? "rounded-[10px] bg-[#FBFBFB] p-3" : "rounded-[10px] bg-[var(--app-soft)] p-3"}`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 ${orderCardVariant === "current" ? "border-b border-[#eee8e3] bg-[#fffcf8] px-5 py-4" : orderCardVariant === "silver" ? "bg-[#FBFBFB] px-2 pb-4 pt-2" : "bg-[var(--app-soft)] px-2 pb-4 pt-2"}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[14px] font-bold text-[#1a1a1a]">{order.id}</span>
                  {orderCardVariant === "silver" ? <>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${order.payMethod === "Pay by Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
                      {labelCase(order.payMethod)} {order.payMethod === "Pay by Clinic" ? <Building2 size={13} /> : <User size={13} />}
                      <span className={`inline-flex h-4 min-w-[34px] items-center justify-center self-center rounded-full px-2 text-center text-[8px] font-bold uppercase leading-none ${order.payStatus === "PAID" ? "bg-white text-[#17201b]" : "bg-[#FF4A87] text-white"}`}>{order.payStatus}</span>
                    </span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${order.shipMethod === "Ship to Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
                      {labelCase(order.shipMethod)} {order.shipMethod === "Ship to Clinic" ? <Building2 size={13} /> : <User size={13} />}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${silverStatusPillStyle[order.status] ?? "bg-[#FFC55B] text-[#151515]"}`}>
                      {labelCase(order.status)} {silverStatusIcon(order.status)}
                    </span>
                  </> : <>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${order.payMethod === "Pay by Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
                      {labelCase(order.payMethod)} {order.payMethod === "Pay by Clinic" ? <Building2 size={13} /> : <User size={13} />}
                      <span className={`rounded-full px-2 py-0.5 text-[8px] font-bold ${order.payStatus === "PAID" ? "bg-white text-[#173d25]" : "bg-[#FF4A87] text-white"}`}>{labelCase(order.payStatus)}</span>
                    </span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${order.shipMethod === "Ship to Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>
                      {labelCase(order.shipMethod)} {order.shipMethod === "Ship to Clinic" ? <Building2 size={13} /> : <User size={13} />}
                    </span>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[0.01em] ${statusPillStyle[order.status] ?? "bg-[#56203B] text-white"}`}>{labelCase(order.status)}</span>
                  </>}
                </div>
                <div className="text-right">
                  <p className="text-[15px] font-bold text-[#183229]">{order.total}</p>
                  <p className="text-[11px] text-[#8c95a1]">{order.timestamp}</p>
                </div>
              </div>

              {orderCardVariant === "optimized" ? (
                <div className="rounded-[8px] bg-white px-5 pb-5 pt-4">
                  <div className="flex flex-wrap gap-2 rounded-[9px] bg-[#fbfffd] px-4 py-3">
                    {("patients" in order ? order.patients : [order.patient]).map(patient => (
                      <div key={patient.name} className="min-w-[220px] flex-1">
                        <p className="text-[12px] font-semibold text-[#1a1a1a]">{patient.name} <span className="font-normal text-[#8c95a1]">({patient.gender})</span></p>
                        <p className="mt-1 text-[10px] text-[#6f7782]">{patient.phone} · {patient.address}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-3 lg:grid-cols-2">
                    {(expandedItems[order.id] ? order.items : order.items.slice(0, 2)).map((item, index) => (
                      <article key={`${order.id}-${item.name}`} className="flex min-h-[142px] gap-4 rounded-[10px] bg-[#FFFAF7] p-4">
                        <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden bg-white">
                          <img src={item.image} alt="" className="size-16 object-contain mix-blend-multiply" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-[13px] font-semibold leading-[17px] text-[#1a1a1a]">{item.name}</p>
                            <span className="shrink-0 text-[12px] font-bold text-[#1a1a1a]">{item.price}</span>
                          </div>
                          <p className="mt-1 text-[11px] text-[#6f7782]">{item.description}</p>
                          <p className="mt-1 text-[10px] text-[#8c95a1]">{item.pharmacy}</p>
                          <span className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${item.tracking === "Tracking Not Ready" ? "bg-[#E8E5B0] text-[#31583F]" : "bg-[#C5F5DD] text-[#31583F]"}`}>{labelCase(item.tracking)}</span>
                          <p className="mt-2 text-[10px] text-[#8c95a1]">Qty {quantities[`${order.id}-${index}`] ?? item.qty} · Refills {item.authRefills} · Days {item.daysSupply}</p>
                        </div>
                      </article>
                    ))}
                    {order.items.length > 2 && (
                      <div className="flex items-center lg:col-start-2">
                        <button onClick={(event) => { event.stopPropagation(); setExpandedItems(prev => ({ ...prev, [order.id]: !prev[order.id] })); }} className="inline-flex items-center gap-1.5 px-1 text-[10px] font-semibold text-[#183229] hover:underline hover:underline-offset-4">
                          <ChevronDown size={13} className={expandedItems[order.id] ? "rotate-180" : ""} />
                          {expandedItems[order.id] ? "Show fewer prescriptions" : `Show ${order.items.length - 2} more prescriptions`}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
              <div className={orderCardVariant === "current" ? "px-7 py-3" : "rounded-[8px] bg-white px-5 py-2"}>
                  {(expandedItems[order.id] ? order.items : order.items.slice(0, 2)).map((item, index) => {
                    const orderPatients = "patients" in order ? order.patients : [order.patient];
                    const patient = orderPatients[index] ?? orderPatients[orderPatients.length - 1];
                    return (
                      <div key={`${patient.name}-${item.name}`} className={`grid min-h-[126px] grid-cols-1 lg:grid-cols-[0.78fr_1.32fr] ${orderCardVariant === "current" ? `py-4 ${index === (expandedItems[order.id] ? order.items.length : Math.min(2, order.items.length)) - 1 ? "" : "border-b border-[#e8e5e2]"}` : "py-5"}`}>
                        <div className="px-3">
                          {(order.payMethod === "Pay by Clinic" || index === 0) && (
                            <>
                              <p className="text-[12px] font-semibold text-[#1a1a1a]">{patient.name} <span className="font-normal text-[#8c95a1]">({patient.gender})</span></p>
                              <p className="mt-1 text-[11px] text-[#6f7782]">{patient.phone}</p>
                              <p className="mt-1 text-[11px] leading-relaxed text-[#6f7782]">{patient.address}</p>
                            </>
                          )}
                        </div>
                        <div className="flex items-start justify-between gap-3 px-3">
                          <div className="flex min-w-0 gap-3">
                            <div className={`flex size-12 shrink-0 items-center justify-center overflow-hidden bg-white ${orderCardVariant === "current" ? "rounded-[8px] border border-[#eee8e3]" : ""}`}>
                              <img src={item.image} alt="" className="h-12 w-12 object-contain mix-blend-multiply" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[12px] font-semibold text-[#1a1a1a]">{item.name}</p>
                              <p className="mt-0.5 text-[11px] text-[#6f7782]">{item.description}</p>
                              <p className="mt-1 text-[10px] text-[#8c95a1]">{item.pharmacy}</p>
                              {orderCardVariant === "silver" ? <span className="mt-1.5 inline-flex items-center gap-1.5 text-[9px] font-medium text-[#98A2B3]"><Clock size={11} strokeWidth={1.5} />{labelCase(item.tracking)}</span> : <span className={`mt-1.5 inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${item.tracking === "Tracking Not Ready" ? "bg-[#E8E5B0] text-[#31583F]" : "bg-[#C5F5DD] text-[#31583F]"}`}>{labelCase(item.tracking)}</span>}
                              <p className="mt-1 text-[10px] text-[#8c95a1]">Qty {quantities[`${order.id}-${index}`] ?? item.qty} · Auth refills {item.authRefills} · Refills left {item.refillsLeft} · Days {item.daysSupply}</p>
                            </div>
                          </div>
                          <span className="text-[12px] font-bold text-[#1a1a1a]">{item.price}</span>
                        </div>
                      </div>
                    );
                  })}
                  {order.items.length > 2 && (
                    <button onClick={(event) => { event.stopPropagation(); setExpandedItems(prev => ({ ...prev, [order.id]: !prev[order.id] })); }} className="mx-auto mt-2 flex w-fit items-center gap-1 py-1 text-[12px] font-semibold text-[#183229]">
                      <ChevronDown size={14} strokeWidth={2} className={`transition-transform ${expandedItems[order.id] ? "rotate-180" : ""}`} />
                      {expandedItems[order.id] ? "Show less" : `Show more ${order.items.length - 2} Prescriptions`}
                    </button>
                  )}
                </div>
              )}
            </section>
            );
          })}
        </div>
      )}
      </div>
    </>
  );

}

function OrderDetailPage({ order, onNavigate }: { order: typeof ORDERS[number]; onNavigate: (page: Page) => void }) {
  const [trackingLinkCopied, setTrackingLinkCopied] = useState(false);
  const [detailSideTab, setDetailSideTab] = useState<"status" | "receipt">("status");
  const patients = "patients" in order ? order.patients : [order.patient];
  const patientTrackingLink = `https://scriptlinkrx.com/track/${order.id.replace('#','')}`;
  const detailLabelCase = (value: string) => {
    const lower = value.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  const statusSteps = ["Order Created", "In Progress", "Shipped", "Delivered"];
  const activeStep = order.status === "Delivered" ? 3 : order.status === "Shipped" ? 2 : order.status === "Processing" ? 1 : 0;
  const compactLabel = "text-[9px] font-semibold uppercase tracking-[0.1em] text-[#8c95a1]";
  const statusBadgeClass = order.status === "Pending Approval"
    ? "bg-[#6D7280] text-white"
    : order.status === "Processing"
      ? "bg-[#F4B64A] text-[#161a18]"
      : order.status === "Shipped"
        ? "bg-[#3269E8] text-white"
        : order.status === "Delivered"
          ? "bg-[#05AF3B] text-white"
          : "bg-[#6D7280] text-white";
  return (
    <>
      <div className="max-w-[1300px]">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <PageBackButton onClick={() => onNavigate("orders")} label="Back to orders" />
          <h1 className="text-[22px] font-semibold text-[#1a1a1a]">Orders</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#d8dedb] bg-white px-4 text-[11px] font-semibold text-[#31583F] transition-colors hover:bg-[#f7f8f7]"><Download size={13} /> Download receipt</button>
          <button onClick={() => onNavigate("support")} className="inline-flex h-9 items-center gap-1.5 rounded-[8px] bg-[#272727] px-4 text-[11px] font-semibold text-white transition-colors hover:bg-[#111]"><Plus size={13} /> Create Ticket</button>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#FFE7D6] px-4 text-[11px] font-semibold text-[#7B003B] transition-colors hover:bg-[#ffdcc4]"><XCircle size={13} /> Request cancellation</button>
        </div>
      </div>
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4">
          <section className="overflow-hidden rounded-[14px] border border-[#e6e7e5] bg-white">
            <div className="grid gap-x-5 gap-y-4 border-b border-[#eceeeb] bg-[#FBFBFB] px-5 py-4 sm:grid-cols-3 lg:grid-cols-[1.15fr_.8fr_1fr_1.05fr_1.35fr_.85fr]">
              <div><p className={compactLabel}>Order Timestamp</p><p className="mt-1 text-[12px] font-semibold text-[#161a18]">{order.timestamp}</p></div>
              <div><p className={compactLabel}>Order ID</p><p className="mt-1 text-[12px] font-semibold text-[#161a18]">{order.id}</p></div>
              <div><p className={compactLabel}>Status</p><span className={`mt-1 inline-flex h-6 items-center rounded-full px-3 text-[10px] font-bold uppercase ${statusBadgeClass}`}>{detailLabelCase(order.status)}</span></div>
              <div><p className={compactLabel}>Ship To</p><span className={`mt-1 inline-flex h-6 items-center gap-1.5 rounded-full px-3 text-[10px] font-bold ${order.shipMethod === "Ship to Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>{detailLabelCase(order.shipMethod)} {order.shipMethod === "Ship to Clinic" ? <Building2 size={12} /> : <User size={12} />}</span></div>
              <div><p className={compactLabel}>Payment Method</p><span className={`mt-1 inline-flex h-6 items-center gap-1.5 rounded-full px-3 text-[10px] font-bold ${order.payMethod === "Pay by Clinic" ? "bg-[#20D8DB] text-[#102c2d]" : "bg-[#ACEABB] text-[#173d25]"}`}>{detailLabelCase(order.payMethod)} {order.payMethod === "Pay by Clinic" ? <Building2 size={12} /> : <User size={12} />}<span className={`inline-flex h-4 min-w-[42px] items-center justify-center rounded-full px-2 text-[8px] font-bold uppercase leading-none ${order.payStatus === "PAID" ? "bg-white text-[#173d25]" : "bg-[#FF4A87] text-white"}`}>{order.payStatus}</span></span></div>
              <div><p className={compactLabel}>Final Total</p><p className="mt-1 text-[12px] font-bold text-[#161a18]">{order.total}</p></div>
            </div>
            <div className="grid divide-y divide-[#eceeeb] lg:grid-cols-[1.15fr_.85fr] lg:divide-x lg:divide-y-0">
              <div className="px-5 py-4">
                <div className="mb-2 flex items-center gap-2"><p className={compactLabel}>Patient</p>{patients.length > 1 && <span className="rounded-full bg-[#eaf8fb] px-2 py-0.5 text-[9px] font-semibold text-[#21707d]">Multi Patient</span>}</div>
                <div className="space-y-3">
                  {patients.map(patient => (
                    <div key={patient.name} className="text-[11px] leading-[1.45] text-[#5f6863]">
                      <div className="flex items-center gap-1.5"><p className="font-semibold text-[#161a18]">{patient.name} <span className="font-medium text-[#777]">({patient.gender})</span></p><CopyButton text={patient.name} /></div>
                      <p className="mt-0.5">{patient.address}</p>
                      <div className="mt-0.5 flex items-center gap-1.5"><span>{patient.phone}</span><CopyButton text={patient.phone} /></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-5 py-4">
                <p className={compactLabel}>Prescriber</p>
                <p className="mt-2 text-[11px] italic leading-[1.45] text-[#667085]">No prescriber has approved this order yet.</p>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[14px] border border-[#e6e7e5] bg-white">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eceeeb] bg-[#FBFBFB] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-[9px] bg-white text-[#667085]"><Building2 size={17} /></span>
                <div><p className="text-[14px] font-semibold text-[#161a18]">{order.items[0].pharmacy}</p><p className="mt-0.5 text-[11px] text-[#667085]">Licensed compounding pharmacy</p></div>
              </div>
              <p className="text-[16px] font-bold text-[#161a18]">{order.total}</p>
            </div>
            <div className="grid gap-3 border-b border-[#eceeeb] px-5 py-3 sm:grid-cols-4">
              <div><p className={compactLabel}>Shipping Method</p><p className="mt-1 text-[11px] font-semibold text-[#161a18]">UPS Overnight Refrigerated</p></div>
              <div><p className={compactLabel}>Est. Delivery</p><p className="mt-1 text-[11px] font-semibold text-[#161a18]">Pending</p></div>
              <div><p className={compactLabel}>Tracking</p><p className="mt-1 text-[11px] text-[#8c95a1]">Tracking Not Ready</p></div>
              <div><p className={compactLabel}>Handling</p><span className="mt-1 inline-flex rounded-full bg-[#edf8fb] px-2 py-0.5 text-[9px] font-semibold text-[#21707d]">Refrigerated</span></div>
            </div>
            <div className="divide-y divide-[#eceeeb]">
              {order.items.map((item, index) => {
                const patient = patients[index] ?? patients[patients.length - 1] ?? patients[0];
                const isSupply = item.name.toLowerCase().includes("supplies") || item.name.toLowerCase().includes("needle");
                return (
                  <div key={`${item.name}-${index}`}>
                    <div className="flex flex-wrap items-center gap-2 bg-[#FBFBFB] px-5 py-2 text-[10px] text-[#667085]">
                      <User size={12} className="text-[#05AF3B]" />
                      <span className="font-semibold text-[#161a18]">{patient.name} ({patient.gender})</span>
                      <span>|</span><span>{patient.phone}</span>
                      <span>|</span><span>{patient.address}</span>
                    </div>
                    <div className="grid gap-4 px-5 py-4 md:grid-cols-[minmax(0,1fr)_70px_70px_70px_90px]">
                      <div className="flex gap-3">
                        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[7px] border border-[#eeeeec] bg-white">
                          <img src={item.image} alt="" className="size-11 object-contain mix-blend-multiply" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-[12px] font-semibold text-[#161a18]">{item.name}</p>
                            {!isSupply && <span className="inline-flex rounded-full bg-gradient-to-r from-[#FFE2D2] to-[#FFF45C] px-2 py-0.5 text-[9px] font-semibold text-[#56203B]">Open Rx</span>}
                          </div>
                          <p className="mt-1 text-[11px] text-[#667085]">{item.description}</p>
                          {!isSupply && <><p className="mt-2 text-[10px] text-[#161a18]"><strong>Sig:</strong> Use as directed by prescriber.</p><p className="mt-1 text-[10px] text-[#161a18]"><strong>Reason:</strong> Patient requires a customized compounded formulation.</p></>}
                          {isSupply && <p className="mt-1 text-[10px] text-[#8c95a1]">Suitable amount</p>}
                        </div>
                      </div>
                      <div className="max-md:hidden"><p className={compactLabel}>Days Supply</p><p className="mt-2 text-[11px] font-semibold">{item.daysSupply}</p></div>
                      <div className="max-md:hidden"><p className={compactLabel}>Refills</p><p className="mt-2 text-[11px] font-semibold">{item.authRefills}</p></div>
                      <div className="max-md:hidden"><p className={compactLabel}>Qty</p><p className="mt-2 text-[11px] font-semibold">{item.qty}</p></div>
                      <p className="text-right text-[12px] font-bold text-[#161a18]">{item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <aside className="sticky top-6 space-y-6">
          <div className="flex border-b border-[#d8ddd9] bg-white">
            {(["status", "receipt"] as const).map(tab => (
              <button key={tab} onClick={() => setDetailSideTab(tab)} className={`relative h-12 flex-1 text-[12px] font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full ${detailSideTab === tab ? "text-[#161a18] after:bg-[#183229]" : "text-[#667085] after:bg-transparent hover:text-[#161a18]"}`}>
                {tab === "status" ? "Order status" : "Receipt"}
              </button>
            ))}
          </div>
          {detailSideTab === "status" ? <>
            <section className="rounded-[14px] bg-[#FBFBFB] p-6">
              <h2 className="text-[18px] font-semibold text-[#161a18]">Order status</h2>
              <div className="mt-6">{statusSteps.map((step,index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className={`flex size-9 items-center justify-center rounded-full ${index <= activeStep ? "bg-[#56203B] text-white" : "bg-[#edf0f2] text-[#9aa1a8]"}`}>{index === 0 ? <Package size={15}/> : <CheckCircle2 size={15}/>}</span>
                    {index < statusSteps.length - 1 && <span className="h-10 w-px bg-[#dfe5e2]" />}
                  </div>
                  <div className="pt-1"><p className="text-[13px] font-semibold text-[#161a18]">{step}</p>{index === 0 && <><p className="mt-1 text-[11px] text-[#667085]">{order.timestamp}</p><p className="mt-1 text-[11px] font-semibold text-[#d92d20]">Payment {order.payStatus.toLowerCase()}</p></>}</div>
                </div>
              ))}</div>
              <div className="mt-6 flex items-center gap-3 rounded-[12px] bg-gradient-to-r from-[#CADDD9] to-[#E8E5B0] px-4 py-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[#667085]"><Bell size={15} /></span>
                <div><p className="text-[12px] font-semibold text-[#161a18]">Live updates.</p><p className="mt-0.5 text-[11px] leading-4 text-[#667085]">Always in the know.</p></div>
              </div>
            </section>
            <section className="bg-white px-5 py-4">
              <h3 className="text-[15px] font-semibold text-[#161a18]">Share with patient</h3>
              <p className="mt-1 text-[12px] leading-5 text-[#667085]">Send this link so your patient can track their order.</p>
              <div className="mt-4 flex items-center gap-2 rounded-[9px] border border-[#e1e5e8] bg-[#FBFBFB] px-3 py-2.5">
                <span className="min-w-0 flex-1 truncate text-[11px] text-[#52645c]">{patientTrackingLink}</span>
                <button onClick={() => navigator.clipboard.writeText(patientTrackingLink).then(() => { setTrackingLinkCopied(true); window.setTimeout(() => setTrackingLinkCopied(false), 1600); })} className="flex shrink-0 items-center justify-center text-[#98a2b3] hover:text-[#183229]" aria-label="Copy patient tracking link">{trackingLinkCopied ? <CheckCircle2 size={15} /> : <svg width="15" height="15" viewBox="0 0 12 12" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.2" stroke="currentColor"/><path d="M1.5 8V1.5H8" stroke="currentColor" strokeLinecap="round"/></svg>}</button>
              </div>
            </section>
          </> : <section className="rounded-[18px] bg-white p-6 shadow-[0_18px_50px_rgba(20,26,23,0.06)]"><h2 className="text-[18px] font-semibold">Receipt</h2><p className="mt-1 text-[11px] text-[#667085]">Order {order.id}</p><div className="mt-5 space-y-3">{order.items.map(item => <div key={item.name} className="flex justify-between gap-3 text-[11px]"><span className="text-[#667085]">{item.name}</span><span className="font-semibold">{item.price}</span></div>)}</div><div className="mt-5 border-t border-[#e8e3df] pt-4"><div className="flex justify-between text-[12px]"><span>Shipping</span><span className="font-semibold">Included</span></div><div className="mt-3 flex justify-between text-[15px] font-bold"><span>Total</span><span className="text-[#183229]">{order.total}</span></div></div><button className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-[8px] bg-[#111] text-[11px] font-semibold text-white"><Download size={13} /> Download receipt</button></section>}
        </aside>
      </div>
      </div>
    </>
  );
}

// ─── Pharmacies ───────────────────────────────────────────────────────────────

const PHARMACIES = [
  { name: "Optimal Balance Pharmacy", location: "Miami, FL", turnaround: "1-2 Days", products: 42, rating: 4.9, status: "Active", phone: "+1 (305) 555-0192" },
  { name: "Rush Pharmacy FL", location: "Orlando, FL", turnaround: "Same Day", products: 38, rating: 4.7, status: "Active", phone: "+1 (407) 555-0143" },
  { name: "Precision Compounding", location: "Houston, TX", turnaround: "2-3 Days", products: 65, rating: 4.8, status: "Active", phone: "+1 (713) 555-0187" },
  { name: "Westside Pharmacy", location: "Los Angeles, CA", turnaround: "1-2 Days", products: 30, rating: 4.5, status: "Active", phone: "+1 (310) 555-0121" },
  { name: "Northeast Compounding", location: "Boston, MA", turnaround: "2-4 Days", products: 22, rating: 4.3, status: "Inactive", phone: "+1 (617) 555-0167" },
];

function PharmaciesPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <>
      <Header title="Pharmacies" onNavigate={onNavigate} />

      <div className="flex items-center gap-3 mb-6">
        <div className="group flex h-[38px] w-[220px] items-center gap-2 rounded-[9px] border border-[#cfcfcf] bg-white px-3 transition-all duration-300 ease-out focus-within:w-[310px] focus-within:border-2 focus-within:border-black">
          <Search size={14} strokeWidth={1.8} className="shrink-0 text-[#686868] transition-transform duration-300 group-focus-within:scale-110" />
          <input
            className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-[#1a1a1a] outline-none placeholder:font-medium placeholder:text-[#686868]"
            placeholder="Search pharmacies..."
          />
          <span className="shrink-0 text-[10px] text-[#686868]">⌘ F</span>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="flex items-center gap-1.5 border border-[#eaeaea] bg-card rounded-[8px] px-3 py-2 text-[12px] font-medium text-[#1a1a1a] hover:bg-[#f7efe9]/60 transition-colors">
            <Filter size={13} /> Filter
          </button>
          <button className="flex items-center gap-1.5 bg-black text-white rounded-[8px] px-3 py-2 text-[12px] font-medium hover:bg-[#1a1a1a]/90 transition-colors">
            <Plus size={13} /> Add Pharmacy
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {PHARMACIES.map((ph) => (
          <div key={ph.name} className="rounded-xl border border-[#eaeaea] bg-card p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-[14px] font-semibold text-[#1a1a1a]">{ph.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin size={11} className="text-[#9d9d9d]" />
                  <span className="text-[11px] text-[#9d9d9d]">{ph.location}</span>
                </div>
              </div>
              <Badge variant={ph.status === "Active" ? "success" : "neutral"}>
                <StatusDot status={ph.status} />
                {ph.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Turnaround", value: ph.turnaround },
                { label: "Products", value: ph.products },
                { label: "Rating", value: `★ ${ph.rating}` },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#f9f0ea]/50 rounded-[8px] px-3 py-2">
                  <p className="text-[10px] text-[#9d9d9d] mb-0.5">{label}</p>
                  <p className="text-[13px] font-semibold text-[#1a1a1a]">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Phone size={11} className="text-[#9d9d9d]" />
                <span className="text-[11px] text-[#9d9d9d]">{ph.phone}</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 rounded-[6px] border border-[#eaeaea] hover:bg-[#f7efe9] transition-colors">
                  <Edit3 size={12} className="text-[#9d9d9d]" />
                </button>
                <button className="p-1.5 rounded-[6px] border border-[#eaeaea] hover:bg-[#fee2e2] transition-colors">
                  <Trash2 size={12} className="text-[#9d9d9d]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Support ──────────────────────────────────────────────────────────────────

const TICKETS = [
  { id: "#089", subject: "Order not received after 5 days", patient: "Sarah Mitchell", phone: "(646)-617-9881", address: "2823 Middletown Road, Bronx, NY 10461", status: "Open", priority: "Urgent", created: "Jul 8", assigned: "Dr. Chen" },
  { id: "#088", subject: "Wrong product shipped - need replacement", patient: "John Reynolds", phone: "(718)-555-0143", address: "88 Park Blvd, Queens, NY 11375", status: "Open", priority: "Urgent", created: "Jul 7", assigned: "Unassigned" },
  { id: "#087", subject: "Question about dosage instructions", patient: "Emily Krause", phone: "(718)-555-0187", address: "302 Maple Ave, Brooklyn, NY 11201", status: "Resolved", priority: "Normal", created: "Jul 6", assigned: "Nurse Kim" },
  { id: "#086", subject: "Billing discrepancy on last invoice", patient: "David Lim", phone: "(646)-389-7766", address: "95 Windermere Drive, Westchester County, NY 10710", status: "Open", priority: "Normal", created: "Jul 5", assigned: "Admin Team" },
  { id: "#085", subject: "Side effects consultation request", patient: "Maria Santos", phone: "(555)-789-0123", address: "852 Cedar Ln, Seattle, WA 98101", status: "Resolved", priority: "Normal", created: "Jul 4", assigned: "Dr. Chen" },
  { id: "#084", subject: "Insurance coverage question", patient: "Chris Baker", phone: "(555)-890-1234", address: "963 Birch Blvd, Denver, CO 80201", status: "Resolved", priority: "Normal", created: "Jul 3", assigned: "Admin Team" },
];

function SupportPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const tabs = ["All", "Open", "Resolved", "Urgent"];

  const filtered = TICKETS.filter((t) => {
    const matchesTab = tab === "All" ? true : tab === "Urgent" ? t.priority === "Urgent" : t.status === tab;
    const search = query.trim().toLowerCase();
    const matchesSearch = !search || [t.id, t.subject, t.patient, t.phone, t.address, t.assigned].some(value => value.toLowerCase().includes(search));
    return matchesTab && matchesSearch;
  });

  const tabCount = (name: string) => name === "All"
    ? TICKETS.length
    : name === "Urgent"
      ? TICKETS.filter(ticket => ticket.priority === "Urgent").length
      : TICKETS.filter(ticket => ticket.status === name).length;

  return (
    <>
      <Header title="Support tickets" onNavigate={onNavigate} />

      <section className="mb-6 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          { label: "Open tickets", value: "17", note: "2 need attention", icon: MessageSquare, bg: "bg-[#f5f8f6]", color: "text-[#31584A]" },
          { label: "Urgent", value: "3", note: "Review today", icon: AlertCircle, bg: "bg-[#fff7f2]", color: "text-[#8A4338]" },
          { label: "Average response", value: "4.2h", note: "Within target", icon: Clock, bg: "bg-[#fafafa]", color: "text-[#6E642A]" },
          { label: "Resolved today", value: "8", note: "6 more this week", icon: CheckCircle2, bg: "bg-[#f2fbf5]", color: "text-[#31583F]" },
        ].map(({ label, value, note, icon: Icon, bg, color }) => (
          <div key={label} className="flex min-h-[108px] items-center gap-4 rounded-[14px] border border-[#efefec] bg-white p-4">
            <div className={`flex size-11 shrink-0 items-center justify-center rounded-[12px] ${bg} ${color}`}>
              <Icon size={18} strokeWidth={1.7} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-[#858b88]">{label}</p>
              <p className="mt-0.5 text-[22px] font-semibold tracking-[-0.02em] text-[#1a1a1a]">{value}</p>
              <p className="mt-0.5 truncate text-[10px] text-[#9b9e9c]">{note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-[14px] bg-[#FBFBFB] p-2">
        <div className="flex flex-wrap items-end justify-between gap-4 px-3 pb-3 pt-2">
          <div>
            <h2 className="text-[15px] font-semibold text-[#1a1a1a]">Ticket inbox</h2>
            <p className="mt-1 text-[11px] text-[#8c8c8c]">Track questions, order issues, and patient requests.</p>
          </div>
          <div className="flex items-center gap-2 max-sm:w-full">
            <label className="group flex h-9 w-[245px] items-center gap-2 rounded-[9px] border border-[#cfcfcf] bg-white px-3 transition-all duration-300 ease-out focus-within:w-[310px] focus-within:border-2 focus-within:border-black max-sm:flex-1">
              <Search size={14} className="text-[#858b88] transition-transform duration-300 group-focus-within:scale-110" />
              <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search tickets" className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-[#aaa]" />
            </label>
            <button className="flex h-9 items-center gap-1.5 rounded-full bg-black px-4 text-[12px] font-medium text-white transition-colors hover:bg-[#252525]">
              <Plus size={14} /> New ticket
            </button>
          </div>
        </div>

        <div className="flex gap-5 border-b border-[#eeeae6] px-3">
          {tabs.map((name) => (
            <button key={name} onClick={() => setTab(name)} className={`relative flex h-10 items-center gap-1.5 text-[11px] font-semibold transition-colors ${tab === name ? "text-[#183229]" : "text-[#929794] hover:text-[#1a1a1a]"}`}>
              {name}
              <span className={`flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-[9px] ${tab === name ? "bg-[#183229] text-white" : "bg-[#eeefed] text-[#747976]"}`}>{tabCount(name)}</span>
              {tab === name && <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#183229]" />}
            </button>
          ))}
        </div>

        <div className="space-y-2 p-2">
          {filtered.map((ticket) => {
            return (
              <article key={ticket.id} className="group grid grid-cols-[minmax(260px,1.7fr)_minmax(160px,.85fr)_105px_105px_95px_36px] items-center gap-4 rounded-[11px] bg-white px-4 py-3.5 transition-colors hover:bg-[#fffcfa] max-xl:grid-cols-[minmax(250px,1.7fr)_minmax(150px,.9fr)_100px_95px_36px] max-xl:[&_.created-column]:hidden max-md:grid-cols-[1fr_auto]">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-[#8A4A24]">{ticket.id}</span>
                    {ticket.priority === "Urgent" && <span className="rounded-full bg-[#fff4eb] px-2 py-1 text-[9px] font-semibold text-[#8A4338]">Urgent</span>}
                  </div>
                  <p className="mt-1.5 truncate text-[12px] font-semibold text-[#1a1a1a]">{ticket.subject}</p>
                  <p className="mt-1 text-[10px] text-[#989b99]">Created {ticket.created}</p>
                </div>
                <div className="flex min-w-0 items-center gap-2.5 max-md:hidden">
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-[#292929]">{ticket.patient}</p>
                    <p className="mt-0.5 truncate text-[10px] text-[#6f7782]">{ticket.phone}</p>
                    <p className="mt-0.5 truncate text-[9px] text-[#999]">{ticket.address}</p>
                  </div>
                </div>
                <div className="max-md:hidden">
                  <p className="text-[9px] uppercase tracking-[0.08em] text-[#a0a3a1]">Assigned</p>
                  <p className="mt-1 truncate text-[11px] font-medium text-[#4e514f]">{ticket.assigned}</p>
                </div>
                <span className={`w-fit rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${ticket.status === "Open" ? "bg-[#edf6f2] text-[#31584A]" : "bg-[#ecf8ef] text-[#31583F]"}`}>{ticket.status}</span>
                <p className="created-column text-[10px] text-[#989b99]">{ticket.created}</p>
                <button className="flex size-8 items-center justify-center rounded-[8px] text-[#8c8f8d] transition-colors hover:bg-[#f1efec] hover:text-[#1a1a1a]" aria-label={`Open ticket ${ticket.id}`}><ChevronRight size={15} /></button>
              </article>
            );
          })}
          {filtered.length === 0 && <div className="flex min-h-[180px] flex-col items-center justify-center rounded-[11px] bg-white text-center"><Search size={22} className="text-[#b3b5b3]" /><p className="mt-3 text-[12px] font-semibold text-[#333]">No tickets found</p><p className="mt-1 text-[10px] text-[#999]">Try a different search or filter.</p></div>}
        </div>
      </section>
    </>
  );
}

// ─── Users/Patients ───────────────────────────────────────────────────────────

const PATIENTS = [
  { firstName: "Dan", lastName: "Rahming", birthDate: "04/14/1991", gender: "M", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "Chad", lastName: "Rahming", birthDate: "04/14/1991", gender: "M", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "Alex", lastName: "Rahming", birthDate: "08/14/1991", gender: "F", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Tuckahoe", state: "NY", zip: "10707" },
  { firstName: "Sam", lastName: "B.", birthDate: "05/31/1995", gender: "F", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "Eve", lastName: "K.", birthDate: "02/14/1991", gender: "F", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "395 Oak St", address2: "Suite 500", city: "Los Angeles", state: "CA", zip: "90001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "Taylor", lastName: "Mitchell", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "965 Dan St", address2: "Apr NJ", city: "New York", state: "NY", zip: "50001" },
  { firstName: "Mark", lastName: "Wood", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "965 Dan St", address2: "Floor A", city: "New York", state: "NY", zip: "50001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "John", lastName: "Smith", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646)617-1880", address1: "965 Dan St", address2: "Apr NJ", city: "New York", state: "NY", zip: "50001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "Robert", lastName: "Wilson", birthDate: "08/03/1975", gender: "M", primaryPhone: "(646) 617-1880", address1: "395 Oak St", address2: "Suite 500", city: "Los Angeles", state: "CA", zip: "90001" },
  { firstName: "Jane", lastName: "Doe", birthDate: "03/22/1988", gender: "F", primaryPhone: "(646) 617-1880", address1: "88 Elm Ave", address2: "", city: "English", state: "WA", zip: "98001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "Allison", lastName: "Johnson", birthDate: "11/25/1985", gender: "F", primaryPhone: "(646) 617-1880", address1: "902 Cedar Ln", address2: "", city: "English", state: "WA", zip: "98003" },
  { firstName: "Emily", lastName: "Davis", birthDate: "07/19/1990", gender: "F", primaryPhone: "(646) 617-1880", address1: "902 Cedar Ln", address2: "", city: "English", state: "WA", zip: "98003" },
  { firstName: "Tom", lastName: "Taylor", birthDate: "09/05/1982", gender: "M", primaryPhone: "(646) 617-1880", address1: "902 Cedar Ln", address2: "", city: "Houston", state: "TX", zip: "77001" },
  { firstName: "Sara", lastName: "Brown", birthDate: "04/11/1994", gender: "F", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Apr NJ", city: "Atlanta", state: "GA", zip: "30301" },
  { firstName: "Tom", lastName: "Taylor", birthDate: "09/05/1982", gender: "M", primaryPhone: "(646) 617-1880", address1: "902 Canal Dr", address2: "", city: "Houston", state: "TX", zip: "77001" },
  { firstName: "Jane", lastName: "Doe", birthDate: "03/22/1988", gender: "F", primaryPhone: "(646) 617-1880", address1: "88 Elm Ave", address2: "Suite 2001", city: "Los Angeles", state: "CA", zip: "90003" },
  { firstName: "Michael", lastName: "Chu", birthDate: "06/30/1979", gender: "M", primaryPhone: "(646) 617-1880", address1: "396 May Dr", address2: "", city: "New York", state: "NY", zip: "10001" },
];

function PatientCreateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const inputClass = "mt-1.5 h-10 w-full rounded-[9px] border border-[#dddcd8] bg-white px-3 text-[12px] outline-none placeholder:text-[#b8b8b5] focus:border-[#202020]";
  const fields = [
    ["First Name", "firstName", "Write...", true], ["Last Name", "lastName", "Write...", true],
    ["Primary Phone", "primaryPhone", "(000) 000-0000", true], ["Secondary Phone", "secondaryPhone", "(000) 000-0000", false],
    ["Address 1", "address1", "Start typing address...", true], ["Apt, Floor, etc.", "address2", "Write...", false],
    ["City", "city", "Write...", true], ["Zip Code", "zip", "Write...", true],
    ["Allergies", "allergies", "Write...", false], ["Email", "email", "Write...", false],
  ] as const;
  return (
    <div className="fixed inset-0 z-[80] flex justify-end bg-black/30 backdrop-blur-[2px]">
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Close create patient" />
      <form onSubmit={event => { event.preventDefault(); onClose(); }} className="relative flex h-full w-full max-w-[680px] flex-col overflow-hidden rounded-l-[16px] border-l border-[#e4e1dd] bg-white shadow-[-18px_0_55px_rgba(0,0,0,0.16)]">
        <div className="flex items-center justify-between border-b border-[#ece9e5] px-6 py-5">
          <div><h2 className="text-[20px] font-semibold text-[#171717]">Create Patient</h2><p className="mt-1 text-[11px] text-[#777]">Enter the patient’s personal and contact information.</p></div>
          <button type="button" onClick={onClose} className="flex size-8 items-center justify-center rounded-full text-[#777] hover:bg-[#f4f2ef]" aria-label="Close"><X size={18} /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
            {fields.slice(0, 2).map(([label, name, placeholder, required]) => <label key={name} className="block text-[11px] font-medium text-[#242424]">{label} {required && <span className="text-[#b44b42]">*</span>}<input name={name} required={required} placeholder={placeholder} className={inputClass} /></label>)}
            <label className="block text-[11px] font-medium text-[#242424]">Gender <span className="text-[#b44b42]">*</span><select required defaultValue="" className={inputClass}><option value="" disabled>Select</option><option>Female</option><option>Male</option><option>Other</option></select></label>
            <label className="block text-[11px] font-medium text-[#242424]">Birth Date <span className="text-[#b44b42]">*</span><input type="date" required className={inputClass} /></label>
            {fields.slice(2, 6).map(([label, name, placeholder, required]) => <label key={name} className="block text-[11px] font-medium text-[#242424]">{label} {required && <span className="text-[#b44b42]">*</span>}<input name={name} required={required} type={name.toLowerCase().includes("phone") ? "tel" : "text"} placeholder={placeholder} className={inputClass} /></label>)}
            <label className="block text-[11px] font-medium text-[#242424]">State <span className="text-[#b44b42]">*</span><select required defaultValue="" className={inputClass}><option value="" disabled>Select a state</option><option>Florida</option><option>New York</option><option>Texas</option><option>California</option></select></label>
            {fields.slice(6).map(([label, name, placeholder, required]) => <label key={name} className="block text-[11px] font-medium text-[#242424]">{label} {required && <span className="text-[#b44b42]">*</span>}<input name={name} required={required} type={name === "email" ? "email" : "text"} placeholder={placeholder} className={inputClass} /></label>)}
            <label className="block text-[11px] font-medium text-[#242424]">Language<select defaultValue="" className={inputClass}><option value="" disabled>Select</option><option>English</option><option>Spanish</option><option>Albanian</option></select></label>
          </div>
          <div className="mt-5 border-t border-[#ece9e5] pt-5">
            <h3 className="text-[12px] font-semibold text-[#242424]">BMI Classification</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <label className="text-[11px] font-medium text-[#242424]">Weight<div className="mt-1.5 flex gap-2"><input type="number" min="0" placeholder="Write..." className={inputClass.replace("mt-1.5 ", "")} /><select className="h-10 w-20 rounded-[9px] border border-[#dddcd8] bg-white px-2 text-[12px]"><option>lb</option><option>kg</option></select></div></label>
              <label className="text-[11px] font-medium text-[#242424]">Height<div className="mt-1.5 flex gap-2"><input type="number" min="0" placeholder="Write..." className={inputClass.replace("mt-1.5 ", "")} /><select className="h-10 w-20 rounded-[9px] border border-[#dddcd8] bg-white px-2 text-[12px]"><option>in</option><option>cm</option></select></div></label>
            </div>
          </div>
        </div>
        <div className="border-t border-[#ece9e5] px-6 py-4"><button type="submit" className="h-11 w-full rounded-[8px] bg-[#111] px-6 text-[12px] font-semibold text-white">Save Patient</button></div>
      </form>
    </div>
  );
}

function PatientDetailsView({ patient, onBack, onEdit }: { patient: typeof PATIENTS[number]; onBack: () => void; onEdit: () => void }) {
  const { runWithAppLoader } = useAppLoading();
  const ordersSectionRef = useRef<HTMLElement>(null);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [orderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const [prescriptionFormOpen, setPrescriptionFormOpen] = useState(false);
  const [medication, setMedication] = useState("");
  const [strength, setStrength] = useState("");
  const [prescriptionQty, setPrescriptionQty] = useState("1");
  const [daysSupply, setDaysSupply] = useState("");
  const [refills, setRefills] = useState("");
  const [directions, setDirections] = useState("");
  const [injectionType, setInjectionType] = useState("");
  const [compoundReason, setCompoundReason] = useState("");
  const [description, setDescription] = useState("");
  const [savedPrescriptions, setSavedPrescriptions] = useState<Array<{ medication: string; strength: string; qty: string; days: string; refills: string; directions: string; injectionType?: string; reason?: string; description?: string }>>([]);
  const [orderedPrescriptions, setOrderedPrescriptions] = useState<Array<{ medication: string; strength: string; qty: string; days: string; refills: string; directions: string; injectionType?: string; reason?: string; description?: string }>>([]);
  const [selectedPatientPharmacy, setSelectedPatientPharmacy] = useState<"DCA Pharmacy" | "Rush Pharmacy FL">("DCA Pharmacy");
  const prescriptionComplete = Boolean(medication && strength && prescriptionQty && daysSupply && refills && directions && injectionType && compoundReason);
  const selectedMedicationImage = medication === "NAD+ Injection" ? imgNadInjection : imgAminoQuad;
  const prescriptionUnitPrice = (name: string) => name === "NAD+ Injection" ? 84.50 : name === "Tirzepatide/Pyridoxine (B6)" ? 125.43 : 35;
  return (
    <div className="max-w-[1180px]">
      <div className="mb-5 flex items-center gap-3">
        <PageBackButton onClick={onBack} label="Back to patients" />
        <h1 className="text-[22px] font-semibold text-[#1a1a1a]">Patients</h1>
      </div>
      <section className="rounded-[14px] bg-[var(--app-soft)] px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-[22px] font-semibold text-[#171717]">{patient.firstName} {patient.lastName} <span className="text-[16px] font-semibold text-[#666]">({patient.gender})</span></h1>
            <p className="mt-1 text-[11px] text-[#7a7a7a]">Date of birth {patient.birthDate}</p>
          </div>
          <button onClick={onEdit} className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-4 text-[11px] font-semibold text-[#31583F] shadow-sm"><Edit3 size={13} /> Edit patient</button>
        </div>
      </section>

      <section className="mt-4 rounded-[14px] bg-white">
        <button onClick={() => setDetailsOpen(current => !current)} className="flex w-full items-center justify-between px-5 py-4 text-left"><div><h2 className="text-[14px] font-semibold text-[#202020]">Patient information</h2><p className="mt-0.5 text-[10px] text-[#858585]">Contact, address, and medical details</p></div><span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#333]">{detailsOpen ? "Hide details" : "Show details"}<ChevronDown size={14} className={detailsOpen ? "rotate-180" : ""} /></span></button>
        {detailsOpen && <div className="grid gap-3 px-5 pb-5 md:grid-cols-3">
          <div className="rounded-[10px] bg-[#FBFBFB] p-4"><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9298a0]">Contact</p><p className="mt-3 text-[11px] text-[#777]">Primary phone</p><p className="mt-1 text-[12px] font-semibold text-[#222]">{patient.primaryPhone}</p><p className="mt-3 text-[11px] text-[#777]">Email</p><p className="mt-1 text-[12px] text-[#222]">—</p></div>
          <div className="rounded-[10px] bg-[var(--app-soft)] p-4"><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9298a0]">Address</p><p className="mt-3 text-[12px] font-semibold text-[#222]">{patient.address1}</p>{patient.address2 && <p className="mt-1 text-[12px] text-[#555]">{patient.address2}</p>}<p className="mt-1 text-[12px] text-[#555]">{patient.city}, {patient.state} {patient.zip}</p></div>
          <div className="rounded-[10px] bg-[#fbfffd] p-4"><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9298a0]">Medical</p><p className="mt-3 text-[11px] text-[#777]">Allergies</p><p className="mt-1 text-[12px] text-[#222]">None recorded</p></div>
        </div>}
      </section>


      <section ref={ordersSectionRef} className="mt-4 scroll-mt-5 rounded-[14px] bg-[var(--app-soft)] p-5">
        <div className="flex items-center justify-between"><div><h2 className="text-[16px] font-semibold text-[#202020]">Orders <span className="ml-1 text-[12px] font-normal text-[#999]">({orderedPrescriptions.length + 1})</span></h2><p className="mt-1 text-[10px] text-[#858585]">Prescription and order history</p></div><div className="group flex h-[38px] w-[220px] items-center gap-2 rounded-[9px] border border-[#cfcfcf] bg-white px-3 transition-all duration-300 ease-out focus-within:w-[310px] focus-within:border-2 focus-within:border-black"><Search size={14} strokeWidth={1.8} className="shrink-0 text-[#686868] transition-transform duration-300 group-focus-within:scale-110" /><input placeholder="Search orders" className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-[#1a1a1a] outline-none placeholder:font-medium placeholder:text-[#686868]" /><span className="shrink-0 text-[10px] text-[#686868]">⌘ F</span></div></div>
        {orderedPrescriptions.map((prescription, index) => <article key={`ordered-${prescription.medication}-${index}`} className="mt-3 flex flex-wrap items-center gap-4 rounded-[10px] bg-white px-4 py-4"><div className="flex size-12 items-center justify-center overflow-hidden"><img src={prescription.medication === "NAD+ Injection" ? imgNadInjection : imgAminoQuad} alt="" className="size-12 object-contain mix-blend-multiply" /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="text-[12px] font-semibold text-[#222]">{prescription.medication}</p><span className="rounded-full bg-gradient-to-r from-[#FFE2D2] to-[#FFF45C] px-2 py-1 text-[8px] font-bold text-[#56203B]">Pending approval</span></div><p className="mt-1 text-[10px] text-[#777]">Qty {prescription.qty} · {prescription.days} days · {prescription.refills} refills · {selectedPatientPharmacy}</p></div><p className="text-[13px] font-semibold">${(prescriptionUnitPrice(prescription.medication) * Number(prescription.qty)).toFixed(2)}</p></article>)}
        <article className="mt-3 rounded-[10px] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4"><div className="flex items-center gap-3"><div className="flex size-12 shrink-0 items-center justify-center overflow-hidden bg-white"><img src={imgNadInjection} alt="NAD+ Injection" className="size-12 object-contain mix-blend-multiply" /></div><div><div className="flex items-center gap-2"><p className="text-[12px] font-semibold text-[#222]">NAD+ Injection</p><span className="rounded-full bg-gradient-to-r from-[#FFE2D2] to-[#FFF45C] px-2 py-1 text-[8px] font-bold text-[#56203B]">Pending approval</span></div><p className="mt-1 text-[10px] text-[#777]">Order #449537 · Jul 13, 2026 · Qty 1</p></div></div><div className="flex items-center gap-5"><p className="text-[13px] font-semibold text-[#222]">$74.64</p><button onClick={() => setOrderDetailsOpen(current => !current)} className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#333] hover:underline">{orderDetailsOpen ? "Hide details" : "Show details"}<ChevronDown size={13} className={orderDetailsOpen ? "rotate-180" : ""} /></button></div></div>
          {orderDetailsOpen && <div className="mx-4 mb-4 grid gap-4 rounded-[9px] bg-[#FBFBFB] px-4 py-4 text-[11px] sm:grid-cols-4"><div><p className="text-[#888]">Patient</p><p className="mt-1 font-semibold">{patient.firstName} {patient.lastName}</p></div><div><p className="text-[#888]">Shipping</p><p className="mt-1 font-semibold">Ship to patient</p></div><div><p className="text-[#888]">Tracking</p><p className="mt-1 font-semibold">Not ready</p></div><div><p className="text-[#888]">Days supply / Refills</p><p className="mt-1 font-semibold">30 days · 0 refills</p></div></div>}
        </article>
      </section>
    </div>
  );
}

function UsersPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [search, setSearch] = useState("");
  const [createPatientOpen, setCreatePatientOpen] = useState(false);
  const [patients, setPatients] = useState(PATIENTS);
  const [openPatientMenu, setOpenPatientMenu] = useState<number | null>(null);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState<number | null>(null);
  const filtered = patients.filter(
    (p) =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()) ||
      p.primaryPhone.includes(search)
  );

  function patientOrderCount(patient: typeof PATIENTS[number]) {
    const name = `${patient.firstName} ${patient.lastName}`.toLowerCase();
    return ORDERS.filter(order => {
      const orderPatients = "patients" in order ? order.patients : [order.patient];
      return orderPatients.some(orderPatient => orderPatient.name.toLowerCase() === name);
    }).length;
  }

  const COLS = ["Patient", "Phone", "Address", "Orders", ""];

  if (selectedPatientIndex !== null && patients[selectedPatientIndex]) {
    return <><PatientDetailsView patient={patients[selectedPatientIndex]} onBack={() => setSelectedPatientIndex(null)} onEdit={() => setCreatePatientOpen(true)} /><PatientCreateModal open={createPatientOpen} onClose={() => setCreatePatientOpen(false)} /></>;
  }

  return (
    <>
      <div className="max-w-[1300px]">
        {/* Page header row */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[22px] font-semibold text-[#1a1a1a] leading-tight">
            Patients{" "}
            <span className="text-[16px] font-normal text-[#9d9d9d]">({patients.length})</span>
          </h1>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-full border border-[#d8dedb] bg-white px-4 py-2 text-[11px] font-semibold text-[#31583F] transition-colors hover:bg-[#f7f8f7]">
              <Upload size={12} />
              Upload Patients
            </button>
            <button onClick={() => setCreatePatientOpen(true)} className="flex items-center gap-1.5 rounded-full bg-[#111] px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-black">
              <Plus size={12} />
              Create Patient
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-4">
          <div className="group flex h-[38px] w-[220px] items-center gap-2 rounded-[9px] border border-[#cfcfcf] bg-white px-3 transition-all duration-300 ease-out focus-within:w-[310px] focus-within:border-2 focus-within:border-black">
            <Search size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#686868] transition-transform duration-300 group-focus-within:scale-110" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-[#1a1a1a] outline-none placeholder:font-medium placeholder:text-[#686868]"
              placeholder="Search"
            />
            <span className="shrink-0 text-[10px] text-[#686868]">⌘ F</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-[12px] bg-[var(--app-soft)] p-2">
          <table className="w-full min-w-[860px] overflow-hidden rounded-[9px] bg-white">
            <thead>
              <tr className="bg-[#FBFBFB]">
                {COLS.map((h) => (
                  <th
                    key={h}
                    className="whitespace-nowrap px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.08em] text-[#858b88]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => {
                const patientIndex = patients.indexOf(p);
                return (
                <tr
                  key={i}
                  onClick={() => setSelectedPatientIndex(patientIndex)}
                  className="group cursor-pointer transition-colors hover:bg-[var(--app-soft-hover)]"
                >
                  <td className="px-5 py-4">
                    <div className="min-w-0">
                      <p className="whitespace-nowrap text-[13px] font-semibold text-[#1a1a1a]">{p.firstName} {p.lastName} <span className="font-semibold text-[#666]">({p.gender})</span></p>
                      <p className="mt-0.5 text-[12px] font-normal text-[#8c95a1]">Date of birth {p.birthDate}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-[13px] font-medium text-[#4b4b4b]">{p.primaryPhone}</td>
                  <td className="px-5 py-4">
                    <div className="max-w-[360px] text-[13px] leading-[19px] text-[#4b4b4b]">
                      <p className="font-medium">{p.address1}</p>
                      {p.address2 && <p className="text-[#6f7780]">{p.address2}</p>}
                      <p className="text-[#6f7780]">{p.city}, {p.state} {p.zip}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-[13px] font-medium text-[#4b4b4b]">{patientOrderCount(p)}</td>
                  <td onClick={event => event.stopPropagation()} className="relative px-4 py-4 text-right">
                    <button onClick={() => setOpenPatientMenu(current => current === patientIndex ? null : patientIndex)} className={`flex size-7 items-center justify-center rounded-[7px] text-[#777] transition-all hover:bg-[#eceae7] hover:text-[#111] ${openPatientMenu === patientIndex ? "bg-[#eceae7] opacity-100" : "opacity-0 group-hover:opacity-100"}`} aria-label={`Actions for ${p.firstName} ${p.lastName}`}>
                      <MoreHorizontal size={16} />
                    </button>
                    {openPatientMenu === patientIndex && (
                      <div className="absolute right-2 top-10 z-30 w-[150px] overflow-hidden rounded-[9px] border border-[#e2dfdb] bg-white p-1.5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
                        <button onClick={() => { setCreatePatientOpen(true); setOpenPatientMenu(null); }} className="flex h-8 w-full items-center gap-2 rounded-[6px] px-2.5 text-[11px] font-medium text-[#222] hover:bg-[#f4f2ef]"><Edit3 size={13} /> Edit</button>
                        <button onClick={() => setOpenPatientMenu(null)} className="flex h-8 w-full items-center gap-2 rounded-[6px] px-2.5 text-[11px] font-medium text-[#222] hover:bg-[#f4f2ef]"><RefreshCw size={13} /> DoseSpot Sync</button>
                        <button onClick={() => { setPatients(current => current.filter((_, index) => index !== patientIndex)); setOpenPatientMenu(null); }} className="flex h-8 w-full items-center gap-2 rounded-[6px] px-2.5 text-[11px] font-medium text-[#9f3f39] hover:bg-[#fbefee]"><Trash2 size={13} /> Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <PatientCreateModal open={createPatientOpen} onClose={() => setCreatePatientOpen(false)} />
    </>
  );
}

// ─── Settings ─────────────────────────────────────────────────────────────────

function SettingsPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const shouldOpenPaymentSetup = () => window.sessionStorage.getItem("open-payment-setup") === "true";
  const shouldOpenPaymentOverview = () => window.sessionStorage.getItem("open-payment-overview") === "true";
  const [activeTab, setActiveTab] = useState(() => shouldOpenPaymentSetup() || shouldOpenPaymentOverview() ? "Pay by Clinic Card" : "Business Account");
  const [creditCardOpen, setCreditCardOpen] = useState(() => shouldOpenPaymentSetup());
  const [cardType, setCardType] = useState("Visa");
  const [cardAuthorized, setCardAuthorized] = useState(true);
  const [cardSaving, setCardSaving] = useState(false);
  const [savedClinicCard, setSavedClinicCard] = useState(() => window.sessionStorage.getItem("clinic-card-saved") === "true");
  const signatureCanvasRef = useRef<HTMLCanvasElement>(null);
  const signatureDrawingRef = useRef(false);

  useEffect(() => {
    window.sessionStorage.removeItem("open-payment-setup");
    window.sessionStorage.removeItem("open-payment-overview");
    const openPaymentSetup = () => {
      setActiveTab("Pay by Clinic Card");
      setCreditCardOpen(true);
      window.sessionStorage.removeItem("open-payment-setup");
    };
    window.addEventListener("open-payment-setup", openPaymentSetup);
    const openPaymentOverview = () => {
      setActiveTab("Pay by Clinic Card");
      setCreditCardOpen(false);
      window.sessionStorage.removeItem("open-payment-overview");
    };
    window.addEventListener("open-payment-overview", openPaymentOverview);
    return () => {
      window.removeEventListener("open-payment-setup", openPaymentSetup);
      window.removeEventListener("open-payment-overview", openPaymentOverview);
    };
  }, []);

  useEffect(() => {
    if (!creditCardOpen) return;
    const frame = window.requestAnimationFrame(() => {
      const canvas = signatureCanvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.scale(ratio, ratio);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineWidth = 2;
      context.strokeStyle = "#171717";
    });
    return () => window.cancelAnimationFrame(frame);
  }, [creditCardOpen]);

  function signaturePoint(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = signatureCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(event.clientX - rect.left, rect.width)),
      y: Math.max(0, Math.min(event.clientY - rect.top, rect.height)),
    };
  }

  function startSignature(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = signatureCanvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    signatureDrawingRef.current = true;
    canvas.setPointerCapture(event.pointerId);
    const point = signaturePoint(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
  }

  function drawSignature(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!signatureDrawingRef.current) return;
    const canvas = signatureCanvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const point = signaturePoint(event);
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  function stopSignature() {
    signatureDrawingRef.current = false;
  }

  function clearSignature() {
    const canvas = signatureCanvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function saveCreditCard() {
    if (!cardAuthorized || cardSaving) return;
    setCardSaving(true);
    window.setTimeout(() => {
      setCardSaving(false);
      setSavedClinicCard(true);
      window.sessionStorage.setItem("clinic-card-saved", "true");
      window.sessionStorage.setItem("clinic-card-notice-until", String(Date.now() + 20000));
      window.dispatchEvent(new Event("clinic-payment-updated"));
      setCreditCardOpen(false);
    }, 1100);
  }

  const tabs = ["Business Account", "Users", "Prescribers", "Pay by Clinic Card", "ACH Bank Account"];
  const users = [
    ["1", "Adnan Godanci", "(646)-617-9881", "adnan@batchrx.com", "Manager"],
    ["2", "Anna Robinson", "(646)-690-9596", "anna@scriptlinkrx.com", "Prescriber"],
    ["3", "Rudi .", "(917)-719-4314", "rudi@scriptlinkrx.com", "Prescriber"],
    ["4", "Sam .", "(917)-267-8116", "sam@scriptlinkrx.com", "Prescriber"],
    ["5", "Test User xsOvim", "(555)-555-5555", "test+xsOvim@scriptlinkrx.com", "Manager"],
    ["6", "Test User d8nos3", "(555)-555-5555", "test+d8nos3@scriptlinkrx.com", "Manager"],
    ["7", "Mariam Makawy", "(646)-389-2493", "mariam@scriptlinkrx.com", "Prescriber"],
    ["8", "shpend support", "(646)-617-9881", "shpend-support@gmail.com", "Manager"],
    ["9", "Shpend Beqiraj", "(646)-617-9881", "shpend@scriptlinkrx.com", "Prescriber"],
  ];
  const prescribers = [
    ["1", "Chirag Support", "(646)-617-9881", "chirag_support@scriptlinkrx.com", "1234566982"],
    ["2", "Altin Selimi", "(646)-617-9881", "altin@batchrx.com", "1804612084"],
    ["3", "Altin Selimi", "(646)-617-9881", "altiin-a@scriptlinkrx.com", "-"],
    ["4", "Alex Revira", "(100)-147-1633", "alex@scriptlinkrx.com", "1121311614"],
    ["5", "Eric Garcia", "(646)-389-9683", "eric@scriptlinkrx.com", "1234232323"],
    ["6", "Zee Rabushaj", "(646)-617-9881", "demo2@scriptlinkrx.com", "1234523452"],
  ];

  function SettingsField({ label, value, required, wide }: { label: string; value: string; required?: boolean; wide?: boolean }) {
    return (
      <label className={wide ? "col-span-2 max-md:col-span-1" : ""}>
        <span className="mb-1.5 block text-[11px] text-[#9d9d9d]">
          {label}{required && <span className="text-[#d92d20]">*</span>}
        </span>
        <input
          readOnly
          value={value}
          className="w-full rounded-[9px] border border-[#EAE8E1] bg-white px-3 py-2.5 text-[13px] text-[#1a1a1a] outline-none transition-colors focus:border-[#183229]"
        />
      </label>
    );
  }

  function DataTable({ type }: { type: "users" | "prescribers" }) {
    const rows = type === "users" ? users : prescribers;
    const headers = type === "users"
      ? ["#", "Full Name", "User Phone", "User Email", "User Title", "Status", ""]
      : ["#", "Full Name", "Prescriber Phone", "Prescriber Email", "NPI Number", "Status", ""];
    return (
      <div className="overflow-hidden rounded-[12px] bg-[#FBFBFB] p-2">
        <div className="grid grid-cols-[40px_1.25fr_1fr_1.55fr_1fr_92px_38px] rounded-t-[9px] bg-[#FBFBFB] px-4 py-3">
          {headers.map(h => (
            <span key={h} className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8c8c8c]">{h}</span>
          ))}
        </div>
        {rows.map(row => (
          <div key={`${type}-${row[0]}`} className="grid grid-cols-[40px_1.25fr_1fr_1.55fr_1fr_92px_38px] items-center bg-white px-4 py-3.5 text-[12px] text-[#1a1a1a] transition-colors hover:bg-[var(--app-soft-hover)]">
            {row.map((cell, index) => index === 1 ? <span key={cell} className="min-w-0 truncate font-semibold">{cell}</span> : <span key={`${index}-${cell}`} className={`min-w-0 truncate ${index === 0 ? "text-[#999]" : ""}`}>{cell}</span>)}
            <span className="inline-flex w-fit rounded-full bg-[#ecf8ef] px-3 py-1.5 text-[10px] font-semibold text-[#31583F]">Active</span>
            <button className="flex size-7 items-center justify-center rounded-[7px] text-[#8c95a1] transition-colors hover:bg-[#f2f7f4] hover:text-[#183229]" aria-label="More actions">
              <MoreHorizontal size={15} />
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Header title="Settings" onNavigate={onNavigate} />

      <div className="grid grid-cols-[220px_1fr] gap-6">
        <nav className="flex flex-col gap-1">
          {[
            { icon: Building2, label: "Business Account" },
            { icon: Users, label: "Users" },
            { icon: User, label: "Prescribers" },
            { icon: CreditCard, label: "Pay by Clinic Card" },
            { icon: Building2, label: "ACH Bank Account" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex items-center gap-2.5 rounded-[9px] px-3 py-2.5 text-left text-[12px] font-medium transition-colors ${
                activeTab === label ? "bg-[var(--app-menu-bg)] text-[#1a1a1a]" : "text-[#858b88] hover:bg-[var(--app-menu-bg)] hover:text-[#1a1a1a]"
              }`}
            >
              <Icon size={15} strokeWidth={1.5} className="shrink-0" />
              <span className="min-w-0 flex-1">{label}</span>
              {label === "Pay by Clinic Card" && savedClinicCard && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-2 py-1 text-[9px] font-medium text-[#222]">
                  Card on file <CheckCircle2 size={14} strokeWidth={2.1} className="text-[#2563EB]" />
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="space-y-5">
          {activeTab === "Business Account" && (
            <div className="rounded-[14px] bg-[#FBFBFB] p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Business Account</h3>
                <button className="rounded-full bg-black px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  Edit Profile
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <SettingsField label="Business Name" value="ScriptLinkRx Demo" required wide />
                <SettingsField label="Business NPI" value="2222222111" wide />
                <SettingsField label="Address Line 1" value="2823 Middletown Road" wide />
                <SettingsField label="Address Line 2" value="Line 2" wide />
                <SettingsField label="City" value="Bronx" />
                <SettingsField label="State" value="New York" />
                <SettingsField label="Zip Code" value="10461" />
                <SettingsField label="Phone" value="(646)-617-9881" />
                <SettingsField label="Fax" value="(646)-617-9881" />
                <SettingsField label="Pay By Preferred" value="Clinic" />
                <SettingsField label="Ship To Preferred" value="Clinic" />
              </div>
            </div>
          )}

          {activeTab === "Users" && (
            <div className="rounded-[14px] bg-[#FBFBFB] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Users</h3>
              <div className="flex gap-2">
                <button className="rounded-full border border-[#EAE8E1] bg-white px-4 py-2 text-[12px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#FBFBFB]">Invite</button>
                <button className="flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  <Plus size={15} /> Add User
                </button>
              </div>
            </div>
            <DataTable type="users" />
          </div>
          )}

          {activeTab === "Prescribers" && (
            <div className="rounded-[14px] bg-[#FBFBFB] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Prescribers</h3>
              <div className="flex gap-2">
                <button className="rounded-full border border-[#EAE8E1] bg-white px-4 py-2 text-[12px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#FBFBFB]">Invite</button>
                <button className="flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  <Plus size={15} /> Add Prescriber
                </button>
              </div>
            </div>
            <DataTable type="prescribers" />
          </div>
          )}

          {activeTab === "Pay by Clinic Card" && (
            <div className="rounded-[14px] bg-[#FBFBFB] p-6">
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#e8e9e8] pb-4">
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Pay by Clinic Card</h3>
                  <p className="mt-1 text-[11px] text-[#7b827e]">Manage the credit card used for clinic purchases.</p>
                </div>
                {!savedClinicCard && (
                  <button onClick={() => setCreditCardOpen(true)} className="flex items-center gap-1.5 rounded-[8px] bg-black px-3 py-2 text-[11px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90"><Plus size={14} /> Add Credit Card</button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
                {savedClinicCard ? (
                  <div className="rounded-[10px] border border-[#eaeaea] bg-white p-5">
                    <div className="flex items-start justify-between gap-4 border-b border-[#eeeeee] pb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-12 items-center justify-center rounded-[5px] border border-[#dedede] bg-white text-[12px] font-black italic text-[#1434CB]">VISA</span>
                        <div><p className="text-[13px] font-semibold text-[#1a1a1a]">Visa ending in 1234</p><p className="mt-1 text-[10px] text-[#888]">Expires 12/29</p></div>
                      </div>
                      <span className="rounded-full bg-black px-2.5 py-1 text-[9px] font-semibold text-white">Primary</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 text-[11px]"><div><p className="text-[#888]">Cardholder</p><p className="mt-1 font-semibold text-[#222]">ScriptLinkRx Clinic</p></div><div><p className="text-[#888]">Status</p><p className="mt-1 font-semibold text-[#31583F]">Active</p></div></div>
                    <button type="button" onClick={() => setCreditCardOpen(true)} className="h-8 rounded-[7px] bg-black px-3 text-[11px] font-medium text-white transition-colors hover:bg-[#252525]">Update card</button>
                  </div>
                ) : (
                  <div className="flex min-h-[190px] flex-col items-center justify-center rounded-[10px] border border-[#eaeaea] bg-white p-6 text-center">
                    <Package size={28} strokeWidth={1.5} className="mb-3 text-[#9d9d9d]" /><p className="text-[14px] font-semibold text-[#1a1a1a]">No credit card found</p><p className="mt-2 text-[12px] text-[#8c8c8c]">Add a credit card to enable Pay by Clinic.</p>
                    <button onClick={() => setCreditCardOpen(true)} className="mt-4 flex items-center gap-1.5 rounded-[8px] bg-black px-3 py-2 text-[11px] font-medium text-white"><Plus size={14} /> Add Credit Card</button>
                  </div>
                )}
                <div className="rounded-[10px] border border-[#eaeaea] bg-[#FAFAFA] p-5"><AlertCircle size={17} className="mb-3 text-[#667085]" /><p className="text-[12px] leading-relaxed text-[#667085]">The card on file is charged when a new prescription is submitted using Pay by Clinic.</p></div>
              </div>
            </div>
          )}

          {activeTab === "ACH Bank Account" && (
            <div className="rounded-[14px] bg-[#FBFBFB] p-6">
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#e8e9e8] pb-4">
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a]">ACH Bank Account</h3>
                  <p className="mt-1 text-[11px] text-[#7b827e]">Manage the bank account used for clinic ACH payments.</p>
                </div>
                <button className="flex items-center gap-1.5 rounded-[8px] bg-black px-3 py-2 text-[11px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90"><Plus size={14} /> Add Bank Account</button>
              </div>
              <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
                <div className="overflow-hidden rounded-[10px] border border-[#eaeaea] bg-white">
                  <div className="grid grid-cols-[40px_minmax(0,1fr)_100px_82px] border-b border-[#eee8e3] bg-[#fbfaf8] px-4 py-3">{["#", "Bank Accounts", "Status", ""].map(h => <span key={h} className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8c8c8c]">{h}</span>)}</div>
                  <div className="grid grid-cols-[40px_minmax(0,1fr)_100px_82px] items-center px-4 py-4 text-[12px] text-[#1a1a1a]"><span>1</span><div className="min-w-0"><p className="truncate text-[13px] font-semibold">Chase Bank</p><p className="mt-1 text-[11px] text-[#8c8c8c]">**** **** **** 2826</p><p className="mt-1 text-[11px] text-[#667085]">Checking</p></div><span className="w-fit rounded-full bg-black px-2.5 py-1 text-[9px] font-medium text-white">Primary</span><button className="rounded-[7px] border border-[#D9DEDB] px-2.5 py-2 text-[11px] font-medium hover:bg-[#F7F8F7]">Update</button></div>
                </div>
                <div className="rounded-[10px] border border-[#eaeaea] bg-[#FAFAFA] p-5"><AlertCircle size={17} className="mb-3 text-[#667085]" /><p className="text-[12px] leading-relaxed text-[#667085]">Use this bank account for Pay by Clinic ACH payments.</p></div>
              </div>

              <section className="mt-6 border-t border-[#e8e9e8] pt-5">
                <h4 className="mb-4 text-[13px] font-semibold text-[#1a1a1a]">ACH Agreement</h4>
                <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
                  <div className="rounded-[10px] border border-[#eaeaea] bg-white p-6">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-[10px] bg-[#F1F2F2] text-[#4e5652]">
                        <Upload size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[16px] font-semibold text-[#1a1a1a]">ACH Debit Authorization Agreement</p>
                        <p className="mt-1 text-[12px] text-[#667085]">Signed on: December 13, 2025</p>
                      </div>
                    </div>
                    <button className="rounded-[8px] bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                      View Agreement
                    </button>
                  </div>
                  <div className="rounded-[10px] border border-[#eaeaea] bg-[#FAFAFA] p-6">
                    <AlertCircle size={17} className="mb-4 text-[#667085]" />
                    <p className="max-w-[430px] text-[13px] leading-relaxed text-[#667085]">
                      The ACH Debit Authorization Agreement authorizes ScriptLinkRx to initiate ACH debit entries to your designated bank account for payment of fees and other amounts owed.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
      {creditCardOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#101512]/35 p-5 backdrop-blur-[2px]">
          <button className="absolute inset-0 cursor-default" onClick={() => setCreditCardOpen(false)} aria-label="Close add credit card" />
          <section className="relative z-10 max-h-[calc(100vh-40px)] w-full max-w-[460px] overflow-y-auto rounded-[8px] bg-white px-5 py-5 shadow-[0_20px_60px_rgba(16,35,27,0.18)]">
            <h2 className="text-[17px] font-medium text-[#171717]">Add credit card</h2>

            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-medium text-[#292929]">Card Information</span>
                <div className="flex h-10 items-center rounded-[10px] border border-[#ef8c58] bg-white px-3.5 focus-within:border-[1.5px] focus-within:border-[#e76f32]">
                  <input inputMode="numeric" placeholder="1234 1234 1234 1234" className="min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#a5a5a5]" />
                  <div className="ml-2 flex items-center gap-1">
                    <span className="rounded-[2px] border border-[#d8d8d8] bg-white px-1 text-[9px] font-black italic text-[#1434CB]">VISA</span>
                    <span className="flex h-[18px] w-[27px] items-center justify-center rounded-[2px] bg-[#171717]"><span className="size-3 rounded-full bg-[#EB001B]" /><span className="-ml-1.5 size-3 rounded-full bg-[#F79E1B] opacity-90" /></span>
                    <span className="rounded-[2px] bg-[#176BB4] px-1 py-0.5 text-[7px] font-bold leading-[7px] text-white">AM<br />EX</span>
                    <span className="rounded-[2px] border border-[#d8d8d8] bg-white px-1 text-[6px] font-bold text-[#333]">DISCOVER</span>
                  </div>
                </div>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label>
                  <span className="mb-1.5 block text-[11px] font-medium text-[#292929]">Expiration date</span>
                  <input inputMode="numeric" placeholder="MM/YY" className="h-10 w-full rounded-[10px] border border-[#d7d7d7] bg-white px-3.5 text-[12px] outline-none placeholder:text-[#aaa] focus:border-black" />
                </label>
                <label>
                  <span className="mb-1.5 block text-[11px] font-medium text-[#292929]">Security code</span>
                  <input inputMode="numeric" placeholder="CVC" className="h-10 w-full rounded-[10px] border border-[#d7d7d7] bg-white px-3.5 text-[12px] outline-none placeholder:text-[#aaa] focus:border-black" />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[11px] font-medium text-[#292929]">Cardholder name <span className="text-[#b4473d]">*</span></span>
                <input placeholder="Name on card" className="h-10 w-full rounded-[10px] border border-[#d7d7d7] bg-white px-3.5 text-[12px] outline-none placeholder:text-[#aaa] focus:border-black" />
              </label>

              <div className="pt-1">
                <label className="flex cursor-pointer items-center gap-3 text-[11px] text-[#777]">
                  <input type="checkbox" checked={cardAuthorized} onChange={event => setCardAuthorized(event.target.checked)} className="size-4 accent-black" />
                  I agree
                </label>
                <p className="mt-2 max-w-[390px] text-[11px] leading-[14px] text-[#333]">I authorize ScriptLinkRx to charge this card for approved clinic purchases. A new authorization will be required if the card details change.</p>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#343434]">Sign your authorization:</span>
                  <button type="button" onClick={clearSignature} className="h-6 rounded-[5px] border border-[#d8d8d8] px-5 text-[10px] font-medium text-[#555]">Clear</button>
                </div>
                <div className="h-[90px] overflow-hidden rounded-[10px] border border-[#e0e0e0] bg-[#fafafa]">
                  <canvas
                    ref={signatureCanvasRef}
                    onPointerDown={startSignature}
                    onPointerMove={drawSignature}
                    onPointerUp={stopSignature}
                    onPointerCancel={stopSignature}
                    className="block size-full touch-none cursor-crosshair"
                    aria-label="Draw your authorization signature"
                  />
                </div>
              </div>

              <button disabled={!cardAuthorized || cardSaving} onClick={saveCreditCard} className="mt-1 flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#111] text-[13px] font-semibold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-[#b9b9b9]">
                {cardSaving && <Loader2 size={15} className="animate-spin" />}
                {cardSaving ? "Saving…" : "Save"}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

// ─── Single-Patient Cart ──────────────────────────────────────────────────────

function CartModeToolbar({
  cartMode,
  setCartMode,
  onNavigate,
  onCreatePatient,
}: {
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  onNavigate: (p: Page) => void;
  onCreatePatient?: () => void;
}) {
  function selectMode(mode: CartMode) {
    setCartMode(mode);
    onNavigate(mode === "multi" ? "cart-multi" : "cart-single");
  }

  return (
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <div className="flex gap-1 rounded-[8px] bg-[#f6f4f5] p-1">
        <button
          onClick={() => selectMode("single")}
          className={`h-8 rounded-[6px] px-4 text-[12px] font-medium transition-all ${
            cartMode === "single" ? "bg-white text-[#1a1a1a] shadow-sm" : "text-[#9d9d9d] hover:text-[#1a1a1a]"
          }`}
        >
          Single Patient
        </button>
        <button
          onClick={() => selectMode("multi")}
          className={`flex h-8 items-center gap-1.5 rounded-[6px] px-4 text-[12px] font-medium transition-all ${
            cartMode === "multi" ? "bg-white text-[#1a1a1a] shadow-sm" : "text-[#9d9d9d] hover:text-[#1a1a1a]"
          }`}
        >
          Multi Patients
          <span className="flex size-3.5 items-center justify-center rounded-full bg-[#053c23] text-[9px] font-semibold text-white">i</span>
        </button>
      </div>

      <div className="group flex h-9 w-[220px] items-center gap-2 rounded-[9px] border border-[#cfcfcf] bg-white px-3 transition-all duration-300 ease-out focus-within:w-[310px] focus-within:border-2 focus-within:border-black">
        <Search size={14} strokeWidth={1.8} className="shrink-0 text-[#686868] transition-transform duration-300 group-focus-within:scale-110" />
        <input
          className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#686868]"
          placeholder="Search stock or Orders"
        />
        <span className="text-[12px] text-[#686868]">⌘ + F</span>
      </div>

      {onCreatePatient && (
        <button
          onClick={onCreatePatient}
          className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#183229] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#244438]"
        >
          <Plus size={14} /> Create Patient
        </button>
      )}
    </div>
  );
}

function SinglePatientCartPage({
  onNavigate,
  cartMode,
  setCartMode,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
}) {
  const initialPatients = [
    { id: "zeee", name: "Zeee Rabushaj", dob: "06/14/2007", gender: "M", phone: "(646)-389-7766", address: "95 Windermere Drive, Westchester County, NY 10710" },
    { id: "altin", name: "Altin Selimi", dob: "11/12/1994", gender: "M", phone: "(646)-617-9881", address: "95 Windermere Drive, Yonkers, NY 10710" },
    { id: "jane", name: "Jane Doe", dob: "03/22/1990", gender: "F", phone: "5552345678", address: "456 Oak Ave, Los Angeles CA 90001" },
  ];
  const [patients, setPatients] = useState(initialPatients);
  const [patientByPharmacy, setPatientByPharmacy] = useState<Record<string, string>>({});
  const [patientSearch, setPatientSearch] = useState("");
  const [showCreatePatient, setShowCreatePatient] = useState(false);
  const [showPatientPicker, setShowPatientPicker] = useState(false);
  const [activePharmacy, setActivePharmacy] = useState<string | null>(null);
  const [removedItems, setRemovedItems] = useState<Set<number>>(new Set());
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewSubmissionState, setPreviewSubmissionState] = useState<CheckoutSubmissionState>("idle");
  const [paymentMethod, setPaymentMethod] = useState<"patient" | "clinic">("patient");
  const [shipTo, setShipTo] = useState<"patient" | "clinic">("clinic");
  const [prescriptionDetails, setPrescriptionDetails] = useState<Record<number, { days: string; refills: string; directions: string; reason: string }>>({});
  const visiblePatients = patients.filter(patient =>
    `${patient.name} ${patient.phone} ${patient.address}`.toLowerCase().includes(patientSearch.toLowerCase())
  );
  const baseItems = [
    { id: 1, pharmacy: "1st Choice Compounding Pharmacy", name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 125.43, image: blankVialReference, kind: "vial" },
    { id: 2, pharmacy: "1st Choice Compounding Pharmacy", name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, image: null, kind: "supply" },
    { id: 5, pharmacy: "Precision Compounding Pharmacy", name: "Aminoblend", detail: "100mg/50mg/50mg/50mg/100mg/mL | 1 (30mL) Vial", qty: 1, price: 35.99, image: img432, kind: "vial" },
  ];
  const items = baseItems.filter(item => !removedItems.has(item.id));
  const prescriptionItems = items.filter(item => item.kind !== "supply");
  const pharmacyGroups = [
    {
      name: "1st Choice Compounding Pharmacy",
      items: items.filter(item => item.pharmacy === "1st Choice Compounding Pharmacy"),
      shipping: ["UPS Next Day Air (Priority): $30.00", "FedEx Standard Overnight: $30.00"],
    },
    {
      name: "Precision Compounding Pharmacy",
      items: items.filter(item => item.pharmacy === "Precision Compounding Pharmacy"),
      shipping: ["FedEx Overnight Refrigerated: $39.00", "UPS Overnight Refrigerated: $39.00"],
    },
  ].filter(pharmacy => pharmacy.items.length > 0);
  const patientForPharmacy = (pharmacyName: string) =>
    patients.find(patient => patient.id === patientByPharmacy[pharmacyName]) ?? null;
  const activePatient = activePharmacy ? patientForPharmacy(activePharmacy) : null;
  const assignedPharmacyCount = pharmacyGroups.filter(pharmacy => patientForPharmacy(pharmacy.name)).length;
  const allPharmaciesAssigned = pharmacyGroups.length > 0 && assignedPharmacyCount === pharmacyGroups.length;
  const prescriptionsComplete = prescriptionItems.every(item => {
    const details = prescriptionDetails[item.id];
    return patientForPharmacy(item.pharmacy) && details?.days && details?.refills && details?.directions && details?.reason;
  });
  const canPreview = allPharmaciesAssigned && prescriptionsComplete;
  const previewSubmitted = previewSubmissionState === "submitted";
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = pharmacyGroups.reduce((sum, pharmacy) => sum + (Number(pharmacy.shipping[0].match(/\$(\d+(?:\.\d{2})?)/)?.[1] ?? 0)), 0);
  const total = subtotal + shipping;

  function updatePrescriptionDetail(id: number, field: "days" | "refills" | "directions" | "reason", value: string) {
    setPrescriptionDetails(current => ({
      ...current,
      [id]: {
        days: current[id]?.days ?? "",
        refills: current[id]?.refills ?? "",
        directions: current[id]?.directions ?? "",
        reason: current[id]?.reason ?? "",
        [field]: value,
      },
    }));
  }

  function createPatient(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const address = String(form.get("address") ?? "").trim();
    if (!name || !phone || !address) return;

    const patient = {
      id: `patient-${Date.now()}`,
      name,
      dob: String(form.get("dob") ?? ""),
      gender: String(form.get("gender") ?? ""),
      phone,
      address,
    };
    setPatients(current => [...current, patient]);
    if (activePharmacy) {
      setPatientByPharmacy(current => ({ ...current, [activePharmacy]: patient.id }));
    }
    setShowCreatePatient(false);
    setShowPatientPicker(false);
    setActivePharmacy(null);
  }

  function SingleCartThumb({ item }: { item: (typeof items)[number] }) {
    if (item.kind === "supply") {
      return (
        <div className="flex size-12 shrink-0 items-center justify-center rounded-[8px] border border-[#eee] bg-[#f6f4f5]">
          <Syringe size={16} strokeWidth={1.7} className="text-[#183229]" />
        </div>
      );
    }

    return (
      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#eee] bg-gradient-to-b from-[#f7efe9] to-[#ece5b6]/45">
        {item.image && <img src={item.image} alt="" className="h-12 w-12 object-contain mix-blend-multiply" />}
      </div>
    );
  }

  return (
    <>
      <Header title="Cart" onNavigate={onNavigate} />
      <CartModeToolbar
        cartMode={cartMode}
        setCartMode={setCartMode}
        onNavigate={onNavigate}
        onCreatePatient={() => {
          setActivePharmacy(null);
          setShowPatientPicker(false);
          setShowCreatePatient(true);
        }}
      />

      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex min-w-0 flex-col gap-4">
          {pharmacyGroups.map(pharmacy => {
          const cardPatient = patientForPharmacy(pharmacy.name);
          return (
          <section key={pharmacy.name} className="overflow-hidden rounded-[12px] border border-[#e8e3df] bg-white">
            <div className="flex items-center gap-2 border-b border-[#eee8e3] bg-white px-5 py-4">
              <span className="flex size-7 items-center justify-center rounded-[7px] bg-[#eef5f1] text-[#183229]">
                <Building2 size={15} strokeWidth={1.8} />
              </span>
              <h2 className="text-[15px] font-semibold text-[#1a1a1a]">{pharmacy.name} Cart</h2>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_240px_110px_106px_110px_40px] items-center border-b border-[#eee8e3] bg-[#fbfaf8] px-5 py-3 max-lg:hidden">
              {["Product", "Patient", "Price", "Qty", "Total", ""].map(h => (
                <span key={h} className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8c8c8c]">{h}</span>
              ))}
            </div>

            <div className="divide-y divide-[#eee8e3]">
              {pharmacy.items.map(item => (
                <div key={item.id} className="px-5 py-4 transition-colors hover:bg-[var(--app-soft-hover)]">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_240px_110px_106px_110px_40px] lg:items-start">
                    <div className="flex min-w-0 gap-3">
                      <SingleCartThumb item={item} />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <p className="min-w-0 max-w-full break-all text-[16px] font-semibold leading-tight text-[#1a1a1a]">{item.name}</p>
                          {item.kind === "supply" && <span className="rounded-[5px] bg-[#eef0f2] px-1.5 py-0.5 text-[10px] font-semibold text-[#667085]">Supplies</span>}
                        </div>
                        <p className="mt-1 text-[13px] text-[#6f7782]">{item.detail}</p>
                        {item.kind !== "supply" && <p className="mt-3 text-[11px] font-semibold text-[#8c95a1]">Prescription #{prescriptionItems.findIndex(product => product.id === item.id) + 1}</p>}
                      </div>
                    </div>

                    {cardPatient ? (
                      <div className="self-start">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e7efe9]"><User size={11} strokeWidth={1.8} className="text-[#183229]" /></span>
                            <span className="truncate text-[11px] font-semibold uppercase tracking-[0.1em] text-[#52645c]">{cardPatient.name}</span>
                          </div>
                          <button onClick={() => { setActivePharmacy(pharmacy.name); setShowPatientPicker(true); }} className="text-[10px] font-semibold text-[#183229] hover:underline">Change</button>
                        </div>
                        <div className="rounded-[8px] border border-[#eee8e3] bg-[var(--app-soft-hover)] px-3 py-2.5 text-[11px] font-medium leading-relaxed text-[#6f7782]">
                          <div className="flex items-center gap-1.5"><Phone size={12} strokeWidth={1.8} className="shrink-0 text-[#183229]" /><span>{cardPatient.phone}</span></div>
                          <div className="mt-1 flex items-start gap-1.5"><MapPin size={12} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#183229]" /><span>{cardPatient.address}</span></div>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => { setActivePharmacy(pharmacy.name); setShowPatientPicker(true); }}
                        className="inline-flex h-7 w-fit items-center gap-1.5 rounded-full border border-dashed border-[#cfd8d3] bg-white px-2.5 text-[11px] font-bold text-[#334155] transition-colors hover:border-[#183229] hover:bg-[#f8faf9]"
                      >
                        <User size={12} strokeWidth={1.8} className="text-[#52645c]" />
                        <span>Choose patient</span>
                      </button>
                    )}

                    <span className="flex h-5 items-center text-[14px] font-semibold text-[#1a1a1a] lg:justify-center">{item.price === 0 ? "Free" : `$${item.price.toFixed(2)}`}</span>
                    <div className="inline-flex h-8 w-fit overflow-hidden rounded-[7px] border border-[#d8dfdc] bg-white lg:mx-auto">
                      <button className="flex w-8 items-center justify-center border-r border-[#e1e5e3] text-[#183229]"><Minus size={13} /></button>
                      <span className="flex w-9 items-center justify-center text-[13px] font-semibold text-[#1a1a1a]">{item.qty}</span>
                      <button className="flex w-8 items-center justify-center border-l border-[#e1e5e3] text-[#183229]"><Plus size={13} /></button>
                    </div>
                    <span className="flex h-5 items-center text-[14px] font-bold text-[#1a1a1a] lg:justify-center">{item.price === 0 ? "Free" : `$${(item.price * item.qty).toFixed(2)}`}</span>
                    <button
                      onClick={() => setRemovedItems(current => new Set([...current, item.id]))}
                      className="flex size-8 items-center justify-center rounded-[7px] bg-[#f6f4f5] text-[#183229] transition-colors hover:bg-[#fbeaea] hover:text-[#d92d20]"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {cardPatient && item.kind !== "supply" && (
                    <div className="mt-4 rounded-[10px] border border-[#e8e3df] bg-white p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-[16px] font-semibold text-[#1a1a1a]">Create Prescription</h3>
                        <span className="rounded-full bg-[#f2f7f4] px-2.5 py-1 text-[11px] font-semibold text-[#52645c]">{cardPatient.name}</span>
                      </div>
                      <div className="mt-3">
                        <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Drug Name + Strength</label>
                        <input value={`${item.name} ${item.detail.split("|")[0].trim()}`} readOnly className="h-10 w-full cursor-not-allowed rounded-[7px] border border-[#d8dfdc] bg-[#f4f5f4] px-3 text-[13px] font-medium text-[#7b8380] outline-none" />
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_200px_240px]">
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Qty Size</label>
                          <input value={item.detail.includes("|") ? item.detail.split("|").slice(1).join("|").trim() : item.detail} readOnly className="h-10 w-full cursor-not-allowed rounded-[7px] border border-[#d8dfdc] bg-[#f4f5f4] px-3 text-[13px] font-medium text-[#7b8380] outline-none" />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Days Supply</label>
                          <input
                            type="number"
                            min="1"
                            value={prescriptionDetails[item.id]?.days ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)}
                            placeholder="Days"
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[13px] font-medium text-[#6f7782] outline-none placeholder:text-[#b9c0bc] focus:border-[#183229]"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Authorized Refills</label>
                          <input
                            type="number"
                            min="0"
                            value={prescriptionDetails[item.id]?.refills ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)}
                            placeholder="Refills"
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[13px] font-medium text-[#6f7782] outline-none placeholder:text-[#b9c0bc] focus:border-[#183229]"
                          />
                        </div>
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Directions of Use</label>
                          <select
                            value={prescriptionDetails[item.id]?.directions ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)}
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white py-0 pl-3 pr-8 text-[13px] font-medium text-[#6f7782] outline-none focus:border-[#183229]"
                          >
                            <option value="" disabled>Select directions</option>
                            <option>Use as directed by prescriber</option>
                            <option>Take once daily as directed.</option>
                            <option>Inject subcutaneously once weekly.</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Reason to Compound*</label>
                          <select
                            value={prescriptionDetails[item.id]?.reason ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)}
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white py-0 pl-3 pr-8 text-[13px] font-medium text-[#6f7782] outline-none focus:border-[#183229]"
                          >
                            <option value="" disabled>Select reason below or type out your own</option>
                            <option>Patient requires a dosage form not commercially available.</option>
                            <option>Patient requires excipient avoidance.</option>
                            <option>Prescriber requested custom strength.</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Prescription Note (Optional)</label>
                        <textarea placeholder="Enter Prescription Note" className="min-h-[72px] w-full resize-y rounded-[7px] border border-[#d8dfdc] bg-white px-3 py-3 text-[13px] font-medium text-[#6f7782] outline-none placeholder:text-[#b9c0bc] focus:border-[#183229]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-[#eee8e3] bg-white px-5 py-5">
              <h3 className="text-[16px] font-semibold text-[#1a1a1a]">Shipping options</h3>
              <div className="mt-4 flex flex-wrap gap-2 rounded-[10px] bg-[#f6f4f5] p-2">
                {pharmacy.shipping.map((option, index) => (
                  <button key={option} className={`h-9 rounded-[7px] px-3 text-[12px] font-medium ${index === 0 ? "bg-[#183229] text-white" : "bg-white text-[#1a1a1a]"}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </section>
          );
          })}
        </div>

        <aside className="overflow-hidden rounded-[12px] border border-[#e8e3df] bg-white 2xl:sticky 2xl:top-4">
          <div className="border-b border-[#eee8e3] bg-[#fbfaf8] px-5 py-4">
            <p className="text-[15px] font-semibold text-[#1a1a1a]">Order Total</p>
            <p className="mt-0.5 text-[12px] text-[#6f7782]">{assignedPharmacyCount} of {pharmacyGroups.length} pharmacy carts assigned</p>
          </div>
          <div className="flex flex-col gap-4 px-5 py-4">
            <div className="space-y-2">
              {pharmacyGroups.map(pharmacy => {
                const patient = patientForPharmacy(pharmacy.name);
                return (
                  <button
                    key={pharmacy.name}
                    onClick={() => { setActivePharmacy(pharmacy.name); setShowPatientPicker(true); }}
                    className={`w-full rounded-[9px] border px-3 py-2.5 text-left transition-colors ${patient ? "border-[#eee8e3] bg-[var(--app-soft-hover)]" : "border-dashed border-[#aebbb5] bg-[#f8faf9]"}`}
                  >
                    <p className="truncate text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085]">{pharmacy.name}</p>
                    {patient ? (
                      <>
                        <p className="mt-1 text-[12px] font-semibold text-[#1a1a1a]">{patient.name} ({patient.gender})</p>
                        <p className="mt-0.5 text-[11px] text-[#6f7782]">{patient.phone}</p>
                      </>
                    ) : (
                      <span className="mt-2 inline-flex h-7 w-fit items-center gap-1.5 rounded-full border border-dashed border-[#cfd8d3] bg-white px-2.5 text-[11px] font-bold text-[#334155]">
                        <User size={12} strokeWidth={1.8} className="text-[#52645c]" />
                        Choose patient
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="border-t border-[#eee8e3] pt-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Items</p>
              <div className="flex flex-col gap-3">
                {prescriptionItems.map(item => (
                  <div key={item.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1">
                    <p className="truncate text-[12px] font-semibold leading-tight text-[#1a1a1a]">{item.name}</p>
                    <span className="text-right text-[12px] font-semibold text-[#1a1a1a]">${(item.price * item.qty).toFixed(2)}</span>
                    <p className="col-span-2 text-[11px] text-[#6f7782]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-[12px] text-[#6f7782]">
              <span>Items subtotal</span><span className="font-semibold text-[#1a1a1a]">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[12px] text-[#6f7782]">
              <span>Shipping</span><span className="font-semibold text-[#1a1a1a]">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-end justify-between border-t border-[#eee8e3] pt-3">
              <span className="text-[14px] font-bold text-[#1a1a1a]">Total</span><span className="text-[19px] font-bold text-[#183229]">${total.toFixed(2)}</span>
            </div>
            <button disabled={!canPreview} onClick={() => { setPreviewSubmissionState("idle"); setPreviewOpen(true); }} className="h-11 w-full rounded-[8px] bg-[#183229] text-[13px] font-semibold text-white transition-colors hover:bg-[#244438] disabled:cursor-not-allowed disabled:bg-[#c8cecb]">
              {!allPharmaciesAssigned
                ? `Assign ${pharmacyGroups.length - assignedPharmacyCount} more ${pharmacyGroups.length - assignedPharmacyCount === 1 ? "patient" : "patients"}`
                : prescriptionsComplete ? "Continue: Preview" : "Complete required fields"}
            </button>
          </div>
        </aside>
      </div>

      {previewOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#111]/35 backdrop-blur-[3px]">
          <button className="absolute inset-0 cursor-default" onClick={() => { setPreviewOpen(false); setPreviewSubmissionState("idle"); }} aria-label="Close preview" />
          <aside className="relative h-full w-full max-w-[500px] overflow-auto border-l border-[#e8e3df] bg-[#f7f6f2] shadow-[-24px_0_70px_rgba(24,24,24,0.16)]">
            <header className="sticky top-0 z-10 border-b border-[#eee8e3] bg-white/95 px-5 pb-5 pt-6 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8c95a1]">Checkout</p>
                  <h2 className="mt-1 text-[23px] font-semibold tracking-[-0.03em] text-[#171717]">Review and submit</h2>
                  <p className="mt-1 text-[12px] leading-[18px] text-[#6f7782]">Confirm patients, prescriptions, payment, and shipping before submitting.</p>
                </div>
                <button onClick={() => { setPreviewOpen(false); setPreviewSubmissionState("idle"); }} className="flex size-8 items-center justify-center rounded-full text-[#777] transition-colors hover:bg-[#f5f3ef] hover:text-[#111]" aria-label="Close preview">
                  <X size={17} strokeWidth={1.8} />
                </button>
              </div>
            </header>

            <div className="space-y-4 px-5 pb-6 pt-5">
            <section className="rounded-[18px] bg-white p-4 shadow-[0_18px_50px_rgba(24,24,24,0.07)]">
              <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Order for</h3>
              <div className="mt-3 flex flex-col gap-3">
                {pharmacyGroups.map(pharmacy => {
                  const patient = patientForPharmacy(pharmacy.name);
                  if (!patient) return null;
                  return (
                    <div key={pharmacy.name} className="rounded-[13px] bg-[#fbfaf8] px-4 py-3">
                      <p className="text-[13px] font-semibold text-[#1a1a1a]">{patient.name} ({patient.gender})</p>
                      <p className="mt-1 text-[12px] text-[#6f7782]">{patient.phone}</p>
                      <p className="mt-1 text-[12px] leading-relaxed text-[#6f7782]">{patient.address}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[18px] bg-white p-4 shadow-[0_18px_50px_rgba(24,24,24,0.07)]">
              <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Prescriptions</h3>
              <div className="mt-3 flex flex-col gap-3">
                {prescriptionItems.map(item => {
                  const patient = patientForPharmacy(item.pharmacy);
                  return (
                    <div key={item.id} className="rounded-[13px] bg-[#fbfaf8] px-4 py-4">
                      <div className="flex justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-[#1a1a1a]">{item.name}</p>
                          <p className="mt-1 text-[12px] text-[#6f7782]">{item.detail}</p>
                          <p className="mt-1 text-[11px] text-[#8c95a1]">{patient ? patient.name : item.pharmacy}</p>
                        </div>
                        <p className="shrink-0 text-[13px] font-semibold text-[#1a1a1a]">${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[#6f7782]">
                        <span>Days Supply: <strong className="text-[#1a1a1a]">1</strong></span>
                        <span>Refills: <strong className="text-[#1a1a1a]">1</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[18px] bg-white p-4 shadow-[0_18px_50px_rgba(24,24,24,0.07)]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#667085]">Payment</p>
                <p className="mt-1 text-[13px] text-[#1a1a1a]">{previewSubmitted ? "Payment method used for this order" : "Select the payment method for the prescription"}</p>
                {previewSubmitted ? (
                  <div className="mt-3 inline-flex h-9 items-center gap-2 rounded-full border border-[#dce8df] bg-[#f7faf8] px-3 text-[12px] font-semibold text-[#183229]">
                    {paymentMethod === "patient" ? "Pay by Patient" : "Pay by Clinic"} {paymentMethod === "patient" ? <User size={13} /> : <Building2 size={13} />}
                  </div>
                ) : (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => setPaymentMethod("patient")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        paymentMethod === "patient"
                          ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Pay by Patient <User size={13} />
                    </button>
                    <button
                      onClick={() => setPaymentMethod("clinic")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        paymentMethod === "clinic"
                          ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Pay by Clinic <Building2 size={13} />
                    </button>
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-dashed border-[#17a34a] bg-white px-3 text-[12px] font-semibold text-[#0a8f3c] transition-colors hover:bg-[#f2f7f4]">
                      <Plus size={13} /> Credit Card
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-5 border-t border-[#eee8e3] pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#667085]">Shipping</p>
                <p className="mt-1 text-[13px] text-[#1a1a1a]">{previewSubmitted ? "Shipping destination for this order" : "Choose where to ship the prescription"}</p>
                {previewSubmitted ? (
                  <div className="mt-3 inline-flex h-9 items-center gap-2 rounded-full border border-[#dce8df] bg-[#f7faf8] px-3 text-[12px] font-semibold text-[#183229]">
                    {shipTo === "patient" ? "Ship to Patient" : "Ship to Clinic"} {shipTo === "patient" ? <User size={13} /> : <Building2 size={13} />}
                  </div>
                ) : (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => setShipTo("patient")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        shipTo === "patient"
                          ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Ship to Patient <User size={13} />
                    </button>
                    <button
                      onClick={() => setShipTo("clinic")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        shipTo === "clinic"
                          ? "border-[#0fbf9f] bg-[#d9fbf4] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Ship to Clinic <Building2 size={13} />
                    </button>
                  </div>
                )}
              </div>
            </section>

            <section className="rounded-[18px] bg-white p-4 shadow-[0_18px_50px_rgba(24,24,24,0.07)]">
              <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Summary</h3>
              <div className="mt-4 space-y-3 text-[14px]">
                <div className="flex justify-between text-[#6f7782]"><span>Items subtotal</span><span className="font-semibold text-[#1a1a1a]">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-[#6f7782]"><span>Shipping</span><span className="font-semibold text-[#1a1a1a]">${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between border-t border-[#eee8e3] pt-4 font-bold text-[#1a1a1a]"><span>Total</span><span className="text-[#183229]">${total.toFixed(2)}</span></div>
              </div>
            </section>

            <div className="sticky bottom-0 -mx-5 mt-2 border-t border-[#eee8e3] bg-white/95 px-5 py-4 backdrop-blur">
              <CheckoutSubmissionFooter
                state={previewSubmissionState}
                submitLabel="Submit for Approval"
                onEdit={() => { setPreviewOpen(false); setPreviewSubmissionState("idle"); }}
                onSubmit={() => {
                  setPreviewSubmissionState("submitting");
                  window.setTimeout(() => setPreviewSubmissionState("submitted"), 2000);
                }}
                onGoToOrders={() => onNavigate("orders")}
              />
            </div>
            </div>
          </aside>
        </div>
      )}

      {(showPatientPicker || showCreatePatient) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 p-4" role="dialog" aria-modal="true" aria-label={showCreatePatient ? "Create patient" : "Choose patient"}>
          <div className="w-full max-w-[620px] overflow-hidden rounded-[10px] border border-[#e8e3df] bg-white">
            <div className="flex items-center justify-between border-b border-[#eee8e3] px-5 py-4">
              <div>
                <h2 className="text-[16px] font-semibold text-[#1a1a1a]">{showCreatePatient ? "Create Patient" : "Choose Patient"}</h2>
                <p className="mt-0.5 text-[11px] text-[#6f7782]">{showCreatePatient ? (activePharmacy ? `Add and assign to ${activePharmacy}.` : "Add a patient to your patient list.") : `Assign a patient to ${activePharmacy ?? "this pharmacy cart"}.`}</p>
              </div>
              <button
                onClick={() => {
                  setShowPatientPicker(false);
                  setShowCreatePatient(false);
                }}
                className="flex size-8 items-center justify-center rounded-[7px] text-[#6f7782] hover:bg-[#f6f4f5]"
                aria-label="Close"
              >
                <XCircle size={17} />
              </button>
            </div>

            {showCreatePatient ? (
              <form onSubmit={createPatient} className="p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input name="name" required placeholder="Full name" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] outline-none placeholder:text-[#9da4ae] focus:border-[#183229]" />
                  <input name="phone" required placeholder="Phone number" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] outline-none placeholder:text-[#9da4ae] focus:border-[#183229]" />
                  <input name="dob" type="date" aria-label="Date of birth" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] text-[#6f7782] outline-none focus:border-[#183229]" />
                  <select name="gender" defaultValue="" aria-label="Gender" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] text-[#6f7782] outline-none focus:border-[#183229]">
                    <option value="" disabled>Gender</option>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                    <option value="X">Other</option>
                  </select>
                  <input name="address" required placeholder="Full shipping address" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] outline-none placeholder:text-[#9da4ae] focus:border-[#183229] sm:col-span-2" />
                </div>
                <div className="mt-5 flex justify-end gap-2">
                  <button type="button" onClick={() => setShowCreatePatient(false)} className="h-9 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] font-semibold text-[#183229]">Cancel</button>
                  <button type="submit" className="h-9 rounded-[7px] bg-[#183229] px-4 text-[12px] font-semibold text-white">Save and select</button>
                </div>
              </form>
            ) : (
              <div className="p-5">
                <div className="flex h-10 items-center gap-2 rounded-[8px] border border-[#d8dfdc] bg-white px-3">
                  <Search size={14} strokeWidth={1.8} className="shrink-0 text-[#6f7782]" />
                  <input autoFocus value={patientSearch} onChange={event => setPatientSearch(event.target.value)} className="min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#9da4ae]" placeholder="Search patients" />
                </div>
                <div className="mt-3 max-h-[320px] space-y-2 overflow-y-auto pr-1">
                  {visiblePatients.map(patient => {
                    const isSelected = activePatient?.id === patient.id;
                    return (
                      <button
                        key={patient.id}
                        onClick={() => {
                          if (activePharmacy) {
                            setPatientByPharmacy(current => ({ ...current, [activePharmacy]: patient.id }));
                          }
                          setShowPatientPicker(false);
                          setPatientSearch("");
                          setActivePharmacy(null);
                        }}
                        className={`flex w-full items-center justify-between gap-4 rounded-[8px] border px-3 py-3 text-left transition-colors ${isSelected ? "border-[#183229] bg-[#f2f7f4]" : "border-[#e8e3df] hover:border-[#183229]/35"}`}
                      >
                        <div className="min-w-0">
                          <p className="text-[12px] font-semibold text-[#1a1a1a]">{patient.name} ({patient.gender})</p>
                          <p className="mt-1 text-[11px] text-[#6f7782]">{patient.phone} · {patient.address}</p>
                        </div>
                        {isSelected && <CheckCircle2 size={15} className="shrink-0 text-[#183229]" />}
                      </button>
                    );
                  })}
                  {visiblePatients.length === 0 && <p className="py-8 text-center text-[12px] text-[#6f7782]">No patients found.</p>}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#eee8e3] pt-4">
                  <p className="text-[11px] text-[#6f7782]">Patient not listed?</p>
                  <button
                    onClick={() => {
                      setShowPatientPicker(false);
                      setShowCreatePatient(true);
                    }}
                    className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#183229] px-3 text-[12px] font-semibold text-white"
                  >
                    <Plus size={14} /> Create Patient
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ─── Multi-Patient Cart ───────────────────────────────────────────────────────

const MULTI_CART_DATA = {
  pharmacy: "Optimal Balance Pharmacy",
  patients: [
    {
      name: "Altin Selimi",
      dob: "05/01/1986",
      phone: "(646)-389-7766",
      email: "altin.selimi@example.com",
      identification: "NY:23444244343 (State-Issued ID)",
      address: "2823 Middletown Road\nThe Bronx, NY 10461",
      items: [
        { id: 1, name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 7, price: 125.43, badge: null, kind: "vial", pharmacy: "Optimal Balance Pharmacy" },
        { id: 2, name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, badge: "Supplies", kind: "supply" },
      ],
    },
    {
      name: "Jane Doe",
      dob: "03/22/1988",
      phone: "(646)-617-1880",
      email: "jane.doe@example.com",
      identification: "NY:98221443819 (State-Issued ID)",
      address: "95 Windermere Drive\nWestchester County, NY 10710",
      items: [
        { id: 3, name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 125.43, badge: null, kind: "vial", pharmacy: "Optimal Balance Pharmacy" },
        { id: 4, name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, badge: "Supplies", kind: "supply" },
      ],
    },
    {
      name: "Emily Krause",
      dob: "08/14/1991",
      phone: "(646)-389-4455",
      email: "emily.krause@example.com",
      identification: "NY:77120549331 (State-Issued ID)",
      address: "2823 Middletown Road\nBronx, NY 10461",
      items: [
        { id: 5, name: "NAD+ Injection", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 84.50, badge: null, kind: "vial", pharmacy: "DCA Pharmacy", image: imgNadInjection },
      ],
    },
  ],
  shipping: [
    { label: "UPS Next Day Air (Priority)", price: 35.00 },
    { label: "FedEx Standard Overnight", price: 35.00 },
  ],
};

// Shipping capability is configured per pharmacy. Pharmacies without multi-patient
// shipping create one shipment (and one shipping charge) for each patient.
const PHARMACY_MULTI_PATIENT_SHIPPING: Record<string, boolean> = {
  "1st Choice Compounding Pharmacy": true,
  "Optimal Balance Pharmacy": true,
  "DCA Pharmacy": false,
  "Thesis Pharmacy": true,
  "Rush Pharmacy TX": false,
  "Spring Creek Pharmacy": false,
};

function supportsMultiPatientShipping(pharmacy: string) {
  return PHARMACY_MULTI_PATIENT_SHIPPING[pharmacy] ?? false;
}

type MultiCartItem = {
  id: number;
  name: string;
  detail: string;
  qty: number;
  price: number;
  badge: string | null;
  kind: "vial" | "supply";
  image?: string;
  pharmacy?: string;
};

function CartItemImage({ item }: { item: MultiCartItem }) {
  if (item.kind === "supply") {
    return (
      <div className="w-12 h-12 rounded-[8px] bg-[#f6f4f5] border border-[#eee] flex items-center justify-center shrink-0">
        <div className="w-7 h-7 rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center">
          <Syringe size={15} strokeWidth={1.7} className="text-[#183229]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-white">
      <img src={item.image ?? imgAminoQuad} alt={item.name} className="h-14 w-14 object-contain mix-blend-multiply" />
    </div>
  );
}

function MultiPatientCartPage({
  onNavigate,
  cartMode,
  setCartMode,
  selectedPatientIds,
  cartEntries,
  extraVariants,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  selectedPatientIds: number[];
  cartEntries: PatientCartEntry[];
  extraVariants: boolean;
}) {
  const cartData = useMemo(() => cartEntries.length > 0
    ? {
        ...MULTI_CART_DATA,
        pharmacy: [...new Set(cartEntries.map(entry => entry.pharmacy))].length === 1 ? cartEntries[0].pharmacy : "Multiple Pharmacies",
        patients: [...new Set(cartEntries.map(entry => entry.patientId))].map(patientId => {
          const patient = PATIENTS[patientId] ?? PATIENTS[0];
          const entries = cartEntries.filter(entry => entry.patientId === patientId);
          const addressLines = [patient.address1, patient.address2, `${patient.city}, ${patient.state} ${patient.zip}`].filter(Boolean);
          return {
            name: `${patient.firstName} ${patient.lastName}`,
            dob: patient.birthDate,
            phone: patient.primaryPhone,
            email: `${patient.firstName}.${patient.lastName}`.replace(/[^a-z0-9.]/gi, "").toLowerCase() + "@example.com",
            identification: `${patient.state}:23444244343 (State-Issued ID)`,
            address: addressLines.join("\n"),
            items: entries.map(entry => ({
              id: entry.id,
              name: entry.product.name,
              detail: `${entry.strength} | ${entry.size}`,
              qty: entry.qty,
              price: entry.unitPrice,
              badge: null,
              kind: "vial" as const,
              image: entry.product.img,
              pharmacy: entry.pharmacy,
            })),
          };
        }),
      }
    : selectedPatientIds.length > 0
    ? {
        ...MULTI_CART_DATA,
        patients: selectedPatientIds.map((patientId, index) => {
          const patient = PATIENTS[patientId] ?? PATIENTS[0];
          const name = `${patient.firstName} ${patient.lastName}`;
          const addressLines = [
            patient.address1,
            patient.address2,
            `${patient.city}, ${patient.state} ${patient.zip}`,
          ].filter(Boolean);
          return {
            name,
            dob: patient.birthDate,
            phone: patient.primaryPhone,
            email: `${patient.firstName}.${patient.lastName}`.replace(/[^a-z0-9.]/gi, "").toLowerCase() + "@example.com",
            identification: `${patient.state}:23444244343 (State-Issued ID)`,
            address: addressLines.join("\n"),
            items: [
              { id: index * 2 + 1, name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 125.43, badge: null, kind: "vial" as const },
              { id: index * 2 + 2, name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, badge: "Supplies", kind: "supply" as const },
            ],
          };
        }),
      }
    : MULTI_CART_DATA, [cartEntries, selectedPatientIds]);
  const [quantities, setQuantities] = useState<Record<number, number>>(() => {
    const init: Record<number, number> = {};
    cartData.patients.forEach(p => p.items.forEach(i => { init[i.id] = i.qty; }));
    return init;
  });
  const [selectedShippingByPharmacy, setSelectedShippingByPharmacy] = useState<Record<string, number>>({});
  const [removed, setRemoved] = useState<Set<number>>(new Set());
  const [showAllSummaryItems, setShowAllSummaryItems] = useState(false);
  const [cartCardVariant, setCartCardVariant] = useState<1 | 2 | 3 | 4 | 5 | 6>(4);
  const [expandedSupplies, setExpandedSupplies] = useState<Set<number>>(new Set([1]));
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewSubmissionState, setPreviewSubmissionState] = useState<CheckoutSubmissionState>("idle");
  const [paymentMethod, setPaymentMethod] = useState<"patient" | "clinic">("patient");
  const [shipTo, setShipTo] = useState<"patient" | "clinic">("clinic");
  const [voucherCode, setVoucherCode] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState<string | null>(null);
  const [prescriptionDetails, setPrescriptionDetails] = useState<Record<number, { days: string; refills: string; directions: string; reason: string }>>({});
  const [prescriptionValidationAttempted, setPrescriptionValidationAttempted] = useState(false);
  const [addedPrescriptionIds, setAddedPrescriptionIds] = useState<Set<number>>(new Set());
  const [openPrescriptionNoteIds, setOpenPrescriptionNoteIds] = useState<Set<number>>(new Set());
  const [expandedPrescriptionIds, setExpandedPrescriptionIds] = useState<Set<number>>(() => {
    const firstPrescription = cartData.patients.flatMap(patient => patient.items).find(item => item.kind !== "supply");
    return new Set(firstPrescription ? [firstPrescription.id] : []);
  });

  useEffect(() => {
    setQuantities(prev => {
      const next = { ...prev };
      cartData.patients.forEach(patient => patient.items.forEach(item => {
        if (next[item.id] === undefined) next[item.id] = item.qty;
      }));
      return next;
    });
  }, [cartData]);

  useEffect(() => {
    if (!extraVariants) setCartCardVariant(4);
  }, [extraVariants]);

  const pharmacyNames = [...new Set(cartData.patients.flatMap(patient =>
    patient.items.filter(item => item.kind !== "supply").map(item => item.pharmacy ?? cartData.pharmacy)
  ))];
  const shipping = pharmacyNames.reduce((sum, pharmacy) => {
    const shippingIndex = selectedShippingByPharmacy[pharmacy] ?? 0;
    const patientCount = new Set(cartData.patients
      .filter(patient => patient.items.some(item => item.kind !== "supply" && !removed.has(item.id) && (item.pharmacy ?? cartData.pharmacy) === pharmacy))
      .map(patient => patient.name)).size;
    const shipmentCount = supportsMultiPatientShipping(pharmacy) ? 1 : Math.max(1, patientCount);
    return sum + cartData.shipping[shippingIndex].price * shipmentCount;
  }, 0);
  const subtotal = cartData.patients.flatMap(p => p.items)
    .filter(i => !removed.has(i.id))
    .reduce((sum, i) => sum + i.price * (quantities[i.id] ?? 1), 0);
  const voucherDiscount = appliedVoucher ? Math.min(subtotal * 0.1, 50) : 0;
  const total = subtotal + shipping - voucherDiscount;
  const previewSubmitted = previewSubmissionState === "submitted";

  function applyVoucher() {
    const normalizedCode = voucherCode.trim().toUpperCase();
    if (!normalizedCode) return;
    setVoucherCode(normalizedCode);
    setAppliedVoucher(normalizedCode);
  }

  function removeVoucher() {
    setAppliedVoucher(null);
    setVoucherCode("");
  }

  function adjust(id: number, delta: number) {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, (prev[id] ?? 1) + delta) }));
  }

  function toggleSupplies(id: number) {
    setExpandedSupplies(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function togglePrescriptionNote(id: number) {
    setOpenPrescriptionNoteIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function updatePrescriptionDetail(id: number, field: "days" | "refills" | "directions" | "reason", value: string) {
    setPrescriptionDetails(current => ({
      ...current,
      [id]: {
        days: current[id]?.days ?? "1",
        refills: current[id]?.refills ?? "1",
        directions: current[id]?.directions ?? "Inject (2.5 mg) subcutaneously once weekly.",
        reason: current[id]?.reason ?? "",
        [field]: value,
      },
    }));
  }

  function prescriptionFieldClass(value: string) {
    const complete = value.trim().length > 0;
    const state = complete
      ? "border-[#78a98f] bg-[#f6fbf8] focus:border-[#315a47]"
      : "border-[#e39a91] bg-[#fff8f7] focus:border-[#c94f43]";
    return `h-10 w-full rounded-[8px] border px-3 text-[13px] font-medium text-[#4f5b56] outline-none transition-colors ${state}`;
  }

  function PrescriptionFieldStatus({ value }: { value: string }) {
    const complete = value.trim().length > 0;
    return (
      <span className={`ml-2 inline-flex items-center gap-1 text-[9px] font-semibold ${complete ? "text-[#397052]" : "text-[#c94f43]"}`}>
        {complete ? <CheckCircle2 size={11} /> : <AlertCircle size={11} />}
        {complete ? "Complete" : "Required"}
      </span>
    );
  }

  const allItems = cartData.patients.flatMap(p => p.items).filter(i => !removed.has(i.id));
  const summaryItemPreviewCount = 3;
  const hiddenSummaryItemCount = Math.max(0, allItems.length - summaryItemPreviewCount);
  const visibleSummaryItems = showAllSummaryItems ? allItems : allItems.slice(0, summaryItemPreviewCount);
  const cartRows = cartData.patients.flatMap(patient =>
    patient.items
      .filter(item => item.kind !== "supply")
      .map(item => ({ patient, item }))
  ).filter(({ item }) => !removed.has(item.id));
  const cartRowsWithNumbers = cartRows.map((row, index) => ({ ...row, prescriptionNumber: index + 1 }));
  const prescriptionCount = cartData.patients.length;
  const prescriptionsComplete = cartRows.every(({ item }) => {
    const details = prescriptionDetails[item.id];
    return cartCardVariant === 3
      ? Boolean(details?.days.trim() && details?.refills.trim() && details?.directions.trim())
      : Boolean(details?.days.trim() && details?.refills.trim() && details?.directions.trim() && details?.reason.trim());
  });

  function isPrescriptionComplete(id: number) {
    const details = prescriptionDetails[id];
    return cartCardVariant === 3
      ? Boolean(details?.days.trim() && details?.refills.trim() && details?.directions.trim())
      : Boolean(details?.days.trim() && details?.refills.trim() && details?.directions.trim() && details?.reason.trim());
  }

  function requiredFieldClass(value: string | undefined) {
    if (!value?.trim()) {
      return "border-[#DD9463] bg-white focus:border-[#DD9463]";
    }
    return "border-[#EAE8E1] bg-white focus:border-[#183229]";
  }

  function handleCheckout() {
    if (prescriptionsComplete) {
      setPreviewSubmissionState("idle");
      setPreviewOpen(true);
      return;
    }
    setPrescriptionValidationAttempted(true);
    setExpandedPrescriptionIds(new Set(cartRows.filter(({ item }) => !isPrescriptionComplete(item.id)).map(({ item }) => item.id)));
  }

  const cartCardThemes = {
    1: { label: "Current", shell: "#fffaf7", border: "#fffaf7", item: "#ffffff" },
    2: { label: "Silver", shell: "#FBFBFB", border: "#FBFBFB", item: "#ffffff" },
    3: { label: "Boom", shell: "#ffffff", border: "#E8E8E8", item: "#ffffff" },
    4: { label: "Compact", shell: "#FAFAFA", border: "#FAFAFA", item: "#ffffff" },
    5: { label: "Zee", shell: "#FAFAFA", border: "#FAFAFA", item: "#ffffff" },
    6: { label: "Simple", shell: "#FAFAFA", border: "#FAFAFA", item: "#ffffff" },
  } as const;
  const activeCardTheme = cartCardThemes[cartCardVariant];
  const hasBoomOpenForm = cartCardVariant === 3 && cartRows.some(({ item }) => expandedPrescriptionIds.has(item.id) && !addedPrescriptionIds.has(item.id));
  const hasCompactOpenForm = cartCardVariant === 4 && cartRows.some(({ item }) => expandedPrescriptionIds.has(item.id) && !addedPrescriptionIds.has(item.id));
  const hasZeeOpenForm = cartCardVariant === 5 && cartRows.some(({ item }) => expandedPrescriptionIds.has(item.id) && !addedPrescriptionIds.has(item.id));
  const hasSimpleOpenForm = cartCardVariant === 6 && cartRows.some(({ item }) => expandedPrescriptionIds.has(item.id) && !addedPrescriptionIds.has(item.id));
  const hasFocusedOpenForm = hasBoomOpenForm || hasCompactOpenForm || hasZeeOpenForm || hasSimpleOpenForm;

  return (
    <>
      <Header title="Cart" onNavigate={onNavigate} />

      <div className="max-w-[1300px]">
        {extraVariants && <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#777]">Card style</span>
          {([1, 4, 3, 5, 6] as const).map(variant => (
            <button
              key={variant}
              onClick={() => setCartCardVariant(variant)}
              className={`h-8 rounded-full px-3 text-[11px] font-semibold transition-colors ${cartCardVariant === variant ? "bg-[#111] text-white" : "border border-[#ddd] bg-white text-[#555] hover:border-[#999]"}`}
            >
              {variant === 1 ? "1. Current" : variant === 4 ? "2. Adnan Suggestion" : variant === 3 ? "3. Boom" : variant === 5 ? "4. Zee version" : "5. Simple"}
            </button>
          ))}
        </div>}
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[minmax(0,1fr)_290px]">
          <section className="min-w-0">
            {cartRowsWithNumbers.map(({ patient, item }, rowIndex) => {
              const pharmacy = item.pharmacy ?? cartData.pharmacy;
              const isFirstInPharmacy = rowIndex === 0 || (cartRowsWithNumbers[rowIndex - 1].item.pharmacy ?? cartData.pharmacy) !== pharmacy;
              const isLastInPharmacy = rowIndex === cartRowsWithNumbers.length - 1 || (cartRowsWithNumbers[rowIndex + 1].item.pharmacy ?? cartData.pharmacy) !== pharmacy;
              const includedSupplies = patient.items.filter(supply => supply.kind === "supply" && !removed.has(supply.id));
              const isExpanded = expandedPrescriptionIds.has(item.id);
              const showBoomCompletedCard = cartCardVariant === 3 && addedPrescriptionIds.has(item.id) && !isExpanded;
              const isBoomDimmed = cartCardVariant === 3 && hasBoomOpenForm && !(isExpanded && !addedPrescriptionIds.has(item.id));
              const isAdnanStyleVariant = cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6;
              const isCompactActive = isAdnanStyleVariant && isExpanded && !addedPrescriptionIds.has(item.id);
              const isCompactDimmed = isAdnanStyleVariant && (hasCompactOpenForm || hasZeeOpenForm || hasSimpleOpenForm) && !isCompactActive;
              const isCompactCompleted = isAdnanStyleVariant && addedPrescriptionIds.has(item.id) && !isExpanded;
              const details = prescriptionDetails[item.id];
              const selectedShipping = selectedShippingByPharmacy[pharmacy] ?? 0;
              const pharmacyPatientCount = new Set(cartRowsWithNumbers.filter(row => (row.item.pharmacy ?? cartData.pharmacy) === pharmacy).map(row => row.patient.name)).size;
              const multiPatientShipping = supportsMultiPatientShipping(pharmacy);
              const shipmentCount = multiPatientShipping ? 1 : Math.max(1, pharmacyPatientCount);
              const pharmacyShippingTotal = cartData.shipping[selectedShipping].price * shipmentCount;
              const isActivePharmacy = hasFocusedOpenForm && cartRowsWithNumbers.some(row => (row.item.pharmacy ?? cartData.pharmacy) === pharmacy && expandedPrescriptionIds.has(row.item.id) && !addedPrescriptionIds.has(row.item.id));

              return (
                <Fragment key={item.id}>
                  {isFirstInPharmacy && (
                    <div style={{ backgroundColor: activeCardTheme.shell, borderColor: activeCardTheme.border }} className={(rowIndex === 0 ? "" : "mt-8 ") + `transition-opacity ${hasFocusedOpenForm && !isActivePharmacy ? "opacity-55 hover:opacity-85" : ""} ${cartCardVariant === 3 ? "border-b px-0 pb-3 pt-1" : "rounded-t-[10px] px-5 pb-4 pt-5"}`}>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <h2 className={cartCardVariant === 3 ? "text-[13px] font-medium text-[#171717]" : "text-[16px] font-medium text-[#171717]"}>{pharmacy} Cart</h2>
                        <div className="flex items-center gap-3">
                          <select
                            value={selectedShipping}
                            onChange={event => setSelectedShippingByPharmacy(current => ({ ...current, [pharmacy]: Number(event.target.value) }))}
                            aria-label={`Shipping method for ${pharmacy}`}
                            className="h-9 rounded-[9px] border border-[#dedede] bg-white px-3 text-[11px] font-medium text-[#262626] outline-none transition-colors focus:border-[#183229]"
                          >
                            {cartData.shipping.map((option, index) => <option key={option.label} value={index}>{option.label}</option>)}
                          </select>
                          <span className="min-w-[50px] text-right text-[12px] font-semibold text-[#202020]">{"$" + pharmacyShippingTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <article
                    style={{ backgroundColor: activeCardTheme.item, borderColor: activeCardTheme.border }}
                    className={`relative transition-opacity ${
                      cartCardVariant === 3
                        ? `${isExpanded ? "border-l-2 border-l-[#183229] bg-[#FCFCFC] px-5" : "px-3"} border-b py-7 ${isBoomDimmed ? "opacity-45 hover:opacity-75" : ""}`
                        : isAdnanStyleVariant
                          ? `px-5 border-x-[12px] border-b-[12px] ${isExpanded ? "pb-5 pt-5" : "py-7"} ${isCompactActive ? "z-10 rounded-[12px] shadow-[0_18px_42px_rgba(24,50,41,0.12)] ring-1 ring-[#DDE8E2]" : ""} ${isCompactDimmed ? "opacity-55 hover:opacity-85" : ""}`
                          : `px-5 border-x-[12px] border-b-[12px] ${isExpanded ? "pb-5 pt-5" : "py-7"}`
                    }`}
                  >
                    {cartCardVariant === 5 && !showBoomCompletedCard && (
                      <div className="mb-4 hidden grid-cols-[minmax(270px,1fr)_210px_112px_90px] gap-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8c8c88] lg:grid">
                        <span>Product Details</span>
                        <span>Patient</span>
                        <span className="text-center">Qty</span>
                        <span className="text-right">Price</span>
                      </div>
                    )}

                    {!showBoomCompletedCard && <div className={cartCardVariant === 3 ? "grid grid-cols-1 gap-5 lg:grid-cols-[minmax(250px,1fr)_210px_90px_66px] lg:items-start" : "grid grid-cols-1 gap-5 lg:grid-cols-[minmax(270px,1fr)_210px_112px_90px] lg:items-start"}>
                      <div className="flex min-w-0 gap-4">
                        <CartItemImage item={item} />
                        <div className="min-w-0">
                          <p className="whitespace-nowrap text-[14px] font-semibold leading-tight text-[#191919]">{item.name}</p>
                          <p className="mt-1 whitespace-nowrap text-[13px] text-[#858585]">{item.detail}</p>
                          {includedSupplies.length > 0 && (
                            <button onClick={() => toggleSupplies(item.id)} className="mt-2 inline-flex whitespace-nowrap items-center gap-1 text-[12px] text-[#666] underline underline-offset-4">
                              Included Supplies
                              <ChevronDown size={13} className={expandedSupplies.has(item.id) ? "rotate-180 transition-transform" : "transition-transform"} />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className={cartCardVariant === 3 ? "text-[10px] leading-[14px] text-[#333]" : "text-[12px] leading-[18px] text-[#555]"}>
                        <p className={cartCardVariant === 3 ? "text-[12px] font-medium text-[#202020]" : "text-[14px] font-medium text-[#292929]"}>{patient.name}</p>
                        <p className={cartCardVariant === 3 ? "mt-1 whitespace-pre-line" : "mt-1 whitespace-pre-line"}>{patient.address}</p>
                        <p>{patient.phone}</p>
                      </div>

                      <div className={cartCardVariant === 3 ? "inline-flex h-8 w-fit items-center overflow-hidden rounded-full border border-[#e2e2e2] bg-white" : "inline-flex h-10 w-fit items-center overflow-hidden rounded-full border border-[#e2e2e2] bg-white"}>
                        {(quantities[item.id] ?? 1) === 1 ? (
                          <button onClick={() => setRemoved(current => new Set([...current, item.id]))} className={cartCardVariant === 3 ? "flex h-8 w-8 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]" : "flex h-10 w-10 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]"} aria-label={"Remove " + item.name}><Trash2 size={cartCardVariant === 3 ? 12 : 15} /></button>
                        ) : (
                          <button onClick={() => adjust(item.id, -1)} className={cartCardVariant === 3 ? "flex h-8 w-8 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]" : "flex h-10 w-10 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]"} aria-label={"Decrease " + item.name}><Minus size={cartCardVariant === 3 ? 12 : 16} /></button>
                        )}
                        <span className={cartCardVariant === 3 ? "flex h-8 w-6 items-center justify-center text-[11px] font-medium" : "flex h-10 w-8 items-center justify-center text-[13px] font-medium"}>{quantities[item.id] ?? 1}</span>
                        <button onClick={() => adjust(item.id, 1)} className={cartCardVariant === 3 ? "flex h-8 w-8 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]" : "flex h-10 w-10 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]"} aria-label={"Increase " + item.name}><Plus size={cartCardVariant === 3 ? 12 : 16} /></button>
                      </div>

                      <p className={cartCardVariant === 3 ? "pt-1 text-right text-[12px] font-medium text-[#171717]" : "pt-2 text-right text-[14px] font-medium text-[#171717]"}>{item.price === 0 ? "Free" : "$" + (item.price * (quantities[item.id] ?? 1)).toFixed(2)}</p>
                    </div>}

                    {!showBoomCompletedCard && expandedSupplies.has(item.id) && includedSupplies.length > 0 && (
                      <div className="ml-16 mt-3 space-y-2 border-l border-[#dedede] pl-4">
                        {includedSupplies.map(supply => <p key={supply.id} className="text-[11px] text-[#777]">{supply.name} · {supply.detail}</p>)}
                      </div>
                    )}

                    <div className={showBoomCompletedCard ? "mt-0" : "mt-5"}>
                      {!isExpanded ? (
                        addedPrescriptionIds.has(item.id) ? (
                          cartCardVariant === 3 ? (
                            <div className="rounded-[6px] border border-[#E1E3E6] bg-white">
                              <div className="grid grid-cols-1 gap-5 px-5 py-5 md:grid-cols-[minmax(210px,1fr)_minmax(210px,1fr)_150px_54px] md:items-start">
                                <div className="flex min-w-0 gap-3">
                                  <CartItemImage item={item} />
                                  <div className="min-w-0">
                                    <p className="whitespace-nowrap text-[13px] font-semibold leading-tight text-[#1f2933]">{item.name}</p>
                                    <p className="mt-1 whitespace-nowrap text-[11px] text-[#69727d]">{item.detail}</p>
                                    {includedSupplies.length > 0 && (
                                      <button onClick={() => toggleSupplies(item.id)} className="mt-2 text-[12px] text-[#666] underline underline-offset-4">
                                        Included Supplies
                                      </button>
                                    )}
                                  </div>
                                </div>
                                <div className="text-[11px] leading-[16px] text-[#69727d]">
                                  <p className="text-[13px] font-medium text-[#1f2933]">{patient.name}</p>
                                  <p className="mt-1 whitespace-pre-line">{patient.address}</p>
                                  <p>{patient.phone}</p>
                                </div>
                                <div className="flex items-center justify-end gap-3 pt-7">
                                  <p className="text-[13px] font-semibold text-[#171717]">{item.price === 0 ? "Free" : "$" + item.price.toFixed(2)}</p>
                                  <span className="text-[12px] font-semibold text-[#171717]">×</span>
                                  <div className="inline-flex h-8 w-fit items-center overflow-hidden rounded-[5px] bg-[#EEF0F2]">
                                    <button onClick={() => adjust(item.id, -1)} className="flex h-8 w-8 items-center justify-center text-[#333] hover:bg-[#e2e4e7]" aria-label={"Decrease " + item.name}><Minus size={12} /></button>
                                    <span className="flex h-8 w-8 items-center justify-center text-[11px] font-medium">{quantities[item.id] ?? 1}</span>
                                    <button onClick={() => adjust(item.id, 1)} className="flex h-8 w-8 items-center justify-center text-[#333] hover:bg-[#e2e4e7]" aria-label={"Increase " + item.name}><Plus size={12} /></button>
                                  </div>
                                </div>
                                <div className="flex items-start justify-end gap-3">
                                  <button onClick={() => setExpandedPrescriptionIds(current => cartCardVariant === 3 || cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6 ? new Set([item.id]) : new Set([...current, item.id]))} className="text-[#183229] hover:text-black" aria-label="Edit prescription">
                                    <Edit3 size={14} />
                                  </button>
                                  <button onClick={() => setAddedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="text-[#183229] hover:text-black" aria-label="Remove prescription">
                                    <X size={15} />
                                  </button>
                                </div>
                              </div>
                              <button onClick={() => setExpandedPrescriptionIds(current => cartCardVariant === 3 || cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6 ? new Set([item.id]) : new Set([...current, item.id]))} className="flex w-full items-center gap-1 border-t border-[#ECECEC] px-3 py-2 text-left text-[11px] font-medium text-[#1f2933] hover:bg-[#FAFAFA]">
                                <span className="text-[9px]">▶</span>
                                Show details
                              </button>
                            </div>
                          ) : (
                            isCompactCompleted ? (
                              <div className="ml-16 flex max-w-[520px] items-center justify-between gap-4 rounded-[8px] bg-[#F6FAF7] px-4 py-3">
                                <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#315f49]">
                                  <CheckCircle2 size={14} />
                                  Prescription complete
                                </span>
                                <button onClick={() => setExpandedPrescriptionIds(current => cartCardVariant === 3 || cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6 ? new Set([item.id]) : new Set([...current, item.id]))} className="text-[11px] font-semibold text-[#202020] hover:underline hover:underline-offset-4">
                                  Show Details
                                </button>
                              </div>
                            ) : (
                              <div className="ml-16 flex items-center gap-4">
                                <button onClick={() => setExpandedPrescriptionIds(current => cartCardVariant === 3 || cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6 ? new Set([item.id]) : new Set([...current, item.id]))} className="text-[12px] font-medium text-[#202020] hover:underline hover:underline-offset-4">
                                  Show Details
                                </button>
                                <span className="inline-flex items-center gap-2 rounded-[8px] bg-[#eaf4ed] px-3 py-2 text-[11px] font-semibold text-[#315f49]">
                                  <CheckCircle2 size={14} />
                                  Prescription complete
                                </span>
                              </div>
                            )
                          )
                        ) : (
                          <button
                            onClick={() => setExpandedPrescriptionIds(current => cartCardVariant === 3 || cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6 ? new Set([item.id]) : new Set([...current, item.id]))}
                            className={cartCardVariant === 3 ? "ml-16 inline-flex items-center gap-2 rounded-[5px] bg-[#f3f3f3] px-3 py-2 text-[11px] font-semibold text-[#202020] transition-colors hover:bg-[#e8e8e8]" : cartCardVariant === 4 ? "ml-16 inline-flex items-center gap-2 rounded-[8px] bg-[#f5f5f3] px-3 py-2 text-[11px] font-semibold text-[#4d4d4d] transition-colors hover:bg-[#ececea] hover:text-[#202020]" : "ml-16 inline-flex items-center gap-2 rounded-[8px] bg-[#f0f0ee] px-3 py-2 text-[11px] font-semibold text-[#202020] transition-colors hover:bg-[#e5e5e2]"}
                          >
                            <Plus size={14} />
                            Add a prescription
                          </button>
                        )
                      ) : addedPrescriptionIds.has(item.id) ? (
                        <div>
                          <div className="ml-16 flex items-center justify-between gap-3">
                            <button onClick={() => setExpandedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="text-[12px] font-medium text-[#202020] hover:underline hover:underline-offset-4">Hide Details</button>
                            <button onClick={() => setAddedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="inline-flex items-center gap-1.5 pr-3 text-[12px] font-semibold text-[#202020] hover:text-black">
                              <Edit3 size={14} /> Edit
                            </button>
                          </div>
                          <div className="ml-16 mt-3 grid gap-5 rounded-[7px] bg-[var(--app-soft)] px-5 py-4 md:grid-cols-[2fr_1.8fr_0.42fr_0.58fr]">
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Directions of Use</p>
                              <p className="mt-1 text-[11px] leading-[16px] text-[#777]">{details?.directions}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Reason to Compound</p>
                              <p className="mt-1 text-[11px] leading-[16px] text-[#777]">{details?.reason}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Days Supply</p>
                              <p className="mt-1 text-[11px] text-[#777]">{details?.days}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Authorized Refills</p>
                              <p className="mt-1 text-[11px] text-[#777]">{details?.refills}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={cartCardVariant === 3 ? "px-0 py-0" : `rounded-[8px] px-6 py-5 ${cartCardVariant === 2 || cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6 ? "bg-[#FAFAFA]" : "bg-[#fffdfb]"}`}>
                          <div className={cartCardVariant === 3 ? "hidden" : "mb-5 flex items-center justify-between gap-3"}>
                            <div className="flex items-center gap-2">
                              <h3 className="text-[14px] font-medium text-[#202020]">{cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6 ? `Prescription for ${item.name}` : "Create Prescription"}</h3>
                              {(cartCardVariant === 4 || cartCardVariant === 5 || cartCardVariant === 6) && (
                                <span className="rounded-full bg-[#183229] px-2.5 py-1 text-[9px] font-semibold text-white">Active</span>
                              )}
                            </div>
                            {rowIndex > 0 && <button onClick={() => setExpandedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="text-[11px] text-[#777] underline">Hide Details</button>}
                          </div>

                          {cartCardVariant === 3 ? (
                            <div className="rounded-[8px] bg-white px-5 py-5 ring-1 ring-[#E6E6E6]">
                              <div className="grid gap-x-5 gap-y-4 md:grid-cols-[1.1fr_1.1fr_0.56fr_0.56fr]">
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#858585]">Strength + Size</span>
                                  <input disabled value={item.detail.split("|")[0]?.trim() ?? item.detail} className="h-[34px] w-full rounded-[4px] border border-[#EAE8E1] bg-white px-3 text-[12px] font-medium text-[#cfcfcd] outline-none" />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#858585]">Size</span>
                                  <input disabled value={item.detail.split("|")[1]?.trim() ?? item.detail} className="h-[34px] w-full rounded-[4px] border border-[#EAE8E1] bg-white px-3 text-[12px] font-medium text-[#cfcfcd] outline-none" />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Authorized Refills <span className="text-[#b44b42]">*</span></span>
                                  <input type="number" min="0" placeholder="Refills" value={details?.refills ?? ""} onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)} className={"h-[34px] w-full rounded-[4px] border px-3 text-[12px] text-[#171717] outline-none " + requiredFieldClass(details?.refills)} />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Days Supply <span className="text-[#b44b42]">*</span></span>
                                  <input type="number" min="1" placeholder="Days" value={details?.days ?? ""} onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)} className={"h-[34px] w-full rounded-[4px] border px-3 text-[12px] text-[#171717] outline-none " + requiredFieldClass(details?.days)} />
                                </label>
                                <div className="grid gap-x-5 gap-y-4 md:col-span-4 md:grid-cols-2">
                                  <label className="block min-w-0">
                                    <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Reason to Compound <span className="text-[#b44b42]">*</span></span>
                                    <select value={details?.reason ?? ""} onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)} className={"h-[34px] w-full rounded-[4px] border px-3 text-[12px] text-[#171717] outline-none " + requiredFieldClass(details?.reason)}>
                                      <option value="" disabled>Select reason below or type out your own</option>
                                      <option>Patient requires a dosage form not commercially available.</option>
                                      <option>Patient requires excipient avoidance.</option>
                                      <option>Prescriber requested custom strength.</option>
                                    </select>
                                  </label>
                                  <label className="block min-w-0">
                                    <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Directions of Use <span className="text-[#b44b42]">*</span></span>
                                    <select value={details?.directions ?? ""} onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)} className={"h-[34px] w-full rounded-[4px] border px-3 text-[12px] text-[#171717] outline-none " + requiredFieldClass(details?.directions)}>
                                      <option value="" disabled>Select directions</option>
                                      <option>Inject (10 mg) subcutaneously once weekly.</option>
                                      <option>Inject (2.5 mg) subcutaneously once weekly.</option>
                                      <option>Inject (5 mg) subcutaneously once weekly.</option>
                                      <option>Use as directed by prescriber</option>
                                    </select>
                                  </label>
                                </div>
                              </div>
                              {openPrescriptionNoteIds.has(item.id) && (
                                <label className="mt-4 block rounded-[4px] bg-[#FAFAFA] px-4 py-3">
                                  <span className="mb-2 block text-[11px] font-semibold text-[#171717]">Prescription Note (Optional)</span>
                                  <textarea placeholder="Enter Prescription Note" className="min-h-[64px] w-full resize-y rounded-[4px] border border-[#EAE8E1] bg-white px-3 py-3 text-[12px] outline-none placeholder:text-[#b7b7b4] focus:border-[#183229]" />
                                </label>
                              )}
                              <div className="mt-5 flex items-center justify-between gap-4">
                                  <button onClick={() => togglePrescriptionNote(item.id)} className="text-[12px] font-semibold text-[#171717]">
                                    {openPrescriptionNoteIds.has(item.id) ? "- Hide prescription note" : "+ Add a prescription note"}
                                  </button>
                                <div className="flex items-center gap-4">
                                  <button
                                    onClick={() => {
                                      if (!isPrescriptionComplete(item.id)) return;
                                      setAddedPrescriptionIds(current => new Set([...current, item.id]));
                                      setExpandedPrescriptionIds(current => {
                                        const next = new Set(current);
                                        next.delete(item.id);
                                        const currentIndex = cartRows.findIndex(row => row.item.id === item.id);
                                        const nextPrescription = cartRows[currentIndex + 1];
                                        if (nextPrescription) next.add(nextPrescription.item.id);
                                        return next;
                                      });
                                    }}
                                    disabled={!isPrescriptionComplete(item.id)}
                                    className="h-8 min-w-[86px] rounded-[5px] bg-[#183229] px-4 text-[12px] font-medium text-white transition-colors hover:bg-[#0d211b] disabled:cursor-not-allowed disabled:bg-[#dfdfdc] disabled:text-[#92928f]"
                                  >
                                    Add Order
                                  </button>
                                  <button onClick={() => setExpandedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="text-[12px] font-medium text-[#202020]">
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
	                          ) : cartCardVariant === 6 ? (
	                            <div className="rounded-[10px] bg-white px-5 py-5 ring-1 ring-[#DDE8E2]">
	                              <div className="grid gap-x-3 gap-y-3 md:grid-cols-[minmax(150px,0.44fr)_76px_76px_minmax(280px,1fr)]">
	                                <label className="block">
	                                  <span className="mb-1 flex h-[20px] items-end text-[11px] font-semibold text-[#858585]">Strength + Size</span>
	                                  <input disabled value={item.detail} className="h-[34px] w-full rounded-[8px] border border-[#EAE8E1] bg-white px-3 text-[12px] font-medium text-[#cfcfcd] outline-none" />
	                                </label>
	                                <label className="block">
	                                  <span className="mb-1 flex h-[20px] items-end text-[10px] font-semibold leading-[10px] text-[#171717]">Authorized<br />Refills <span className="text-[#b44b42]">*</span></span>
	                                  <input type="number" min="0" placeholder="Days" value={details?.refills ?? ""} onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.refills)} />
	                                </label>
	                                <label className="block">
	                                  <span className="mb-1 flex h-[20px] items-end whitespace-nowrap text-[10px] font-semibold text-[#171717]">Days Supply <span className="text-[#b44b42]">*</span></span>
	                                  <input type="number" min="1" placeholder="Days" value={details?.days ?? ""} onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.days)} />
	                                </label>
	                                <label className="block min-w-0">
	                                  <span className="mb-1 flex h-[20px] items-end whitespace-nowrap text-[10px] font-semibold text-[#171717]">Directions of Use <span className="text-[#b44b42]">*</span></span>
	                                  <select value={details?.directions ?? ""} onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.directions)}>
	                                    <option value="" disabled>Select directions</option>
	                                    <option>Apply a small amount to affected areas twice daily (morning and evening).</option>
	                                    <option>Inject (10 mg) subcutaneously once weekly.</option>
	                                    <option>Inject (2.5 mg) subcutaneously once weekly.</option>
	                                    <option>Use as directed by prescriber</option>
	                                  </select>
	                                </label>
	                                <label className="block md:col-span-4">
	                                  <span className="mb-1.5 block text-[10px] font-semibold text-[#171717]">Reason to Compound <span className="text-[#b44b42]">*</span></span>
	                                  <select value={details?.reason ?? ""} onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.reason)}>
	                                    <option value="" disabled>Select reason below or type out your own</option>
	                                    <option>Patient has an allergy to X ingredient in the commercially available product.</option>
	                                    <option>Patient requires a dosage form not commercially available.</option>
	                                    <option>Patient requires excipient avoidance.</option>
	                                    <option>Prescriber requested custom strength.</option>
	                                  </select>
	                                </label>
	                              </div>
	                              {openPrescriptionNoteIds.has(item.id) && (
	                                <label className="mt-4 block rounded-[10px] bg-[#FAFAFA] px-4 py-3">
	                                  <span className="mb-2 block text-[11px] font-semibold text-[#171717]">Prescription Note (Optional)</span>
	                                  <textarea placeholder="Enter Prescription Note" className="min-h-[72px] w-full resize-y rounded-[8px] border border-[#EAE8E1] bg-white px-3 py-3 text-[12px] outline-none placeholder:text-[#b7b7b4] focus:border-[#183229]" />
	                                </label>
	                              )}
	                              <div className="mt-5 flex items-center justify-between gap-4">
	                                <button onClick={() => togglePrescriptionNote(item.id)} className="text-[12px] font-semibold text-[#171717]">
	                                  {openPrescriptionNoteIds.has(item.id) ? "- Hide prescription note" : "+ Add a prescription note"}
	                                </button>
	                                <div className="flex items-center gap-4">
	                                  <button
	                                    onClick={() => {
	                                      if (!isPrescriptionComplete(item.id)) return;
	                                      setAddedPrescriptionIds(current => new Set([...current, item.id]));
	                                      setExpandedPrescriptionIds(current => {
	                                        const next = new Set(current);
	                                        next.delete(item.id);
	                                        const currentIndex = cartRows.findIndex(row => row.item.id === item.id);
	                                        const nextPrescription = cartRows[currentIndex + 1];
	                                        if (nextPrescription) next.add(nextPrescription.item.id);
	                                        return next;
	                                      });
	                                    }}
	                                    disabled={!isPrescriptionComplete(item.id)}
	                                    className="h-8 min-w-[76px] rounded-[7px] bg-[#111] px-4 text-[11px] font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-[#dfdfdc] disabled:text-[#92928f]"
	                                  >
	                                    Add Order
	                                  </button>
	                                  <button
	                                    onClick={() => setExpandedPrescriptionIds(current => {
	                                      const next = new Set(current);
	                                      next.delete(item.id);
	                                      return next;
	                                    })}
	                                    className="text-[11px] font-medium text-[#202020]"
	                                  >
	                                    Cancel
	                                  </button>
	                                </div>
	                              </div>
	                            </div>
	                          ) : cartCardVariant === 5 ? (
                            <div className="rounded-[10px] bg-white px-5 py-5 ring-1 ring-[#DDE8E2]">
                              <div className="grid gap-x-4 gap-y-3 md:grid-cols-[150px_150px_88px_88px_minmax(0,1fr)]">
                                <label className="block">
                                  <span className="mb-1.5 block text-[10px] font-semibold text-[#676767]">Strength</span>
                                  <input disabled value={item.detail.split("|")[0]?.trim() ?? item.detail} className="h-[34px] w-full rounded-[8px] border border-[#EAE8E1] bg-white px-3 text-[11px] font-medium text-[#cfcfcd] outline-none" />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[10px] font-semibold text-[#676767]">Size</span>
                                  <input disabled value={item.detail.split("|")[1]?.trim() ?? item.detail} className="h-[34px] w-full rounded-[8px] border border-[#EAE8E1] bg-white px-3 text-[11px] font-medium text-[#cfcfcd] outline-none" />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block whitespace-nowrap text-[10px] font-semibold text-[#171717]">Authorized Refills <span className="text-[#b44b42]">*</span></span>
                                  <input type="number" min="0" placeholder="Days" value={details?.refills ?? ""} onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.refills)} />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[10px] font-semibold text-[#171717]">Days Supply <span className="text-[#b44b42]">*</span></span>
                                  <input type="number" min="1" placeholder="Days" value={details?.days ?? ""} onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.days)} />
                                </label>
                                <label className="block md:col-span-5">
                                  <span className="mb-1.5 block text-[10px] font-semibold text-[#171717]">Directions of Use <span className="text-[#b44b42]">*</span></span>
                                  <select value={details?.directions ?? ""} onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.directions)}>
                                    <option value="" disabled>Select reason below or type out your own</option>
                                    <option>Inject (10 mg) subcutaneously once weekly.</option>
                                    <option>Inject (2.5 mg) subcutaneously once weekly.</option>
                                    <option>Inject (5 mg) subcutaneously once weekly.</option>
                                    <option>Use as directed by prescriber</option>
                                  </select>
                                </label>
                                <label className="block md:col-span-5">
                                  <span className="mb-1.5 block text-[10px] font-semibold text-[#171717]">Reason to Compound <span className="text-[#b44b42]">*</span></span>
                                  <select value={details?.reason ?? ""} onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[11px] outline-none " + requiredFieldClass(details?.reason)}>
                                    <option value="" disabled>Select reason below or type out your own</option>
                                    <option>Patient requires a dosage form not commercially available.</option>
                                    <option>Patient requires excipient avoidance.</option>
                                    <option>Prescriber requested custom strength.</option>
                                  </select>
                                </label>
                              </div>
                              {openPrescriptionNoteIds.has(item.id) && (
                                <label className="mt-4 block rounded-[10px] bg-white px-4 py-3">
                                  <span className="mb-2 block text-[10px] font-semibold text-[#171717]">Prescription Note (Optional)</span>
                                  <textarea placeholder="Enter Prescription Note" className="min-h-[64px] w-full resize-y rounded-[8px] border border-[#EAE8E1] bg-white px-3 py-3 text-[11px] outline-none placeholder:text-[#b7b7b4] focus:border-[#183229]" />
                                </label>
                              )}
                              <div className="mt-5 flex items-center justify-between gap-4">
                                <button onClick={() => togglePrescriptionNote(item.id)} className="text-[11px] font-semibold text-[#171717]">
                                  {openPrescriptionNoteIds.has(item.id) ? "- Hide prescription note" : "+ Add a prescription note"}
                                </button>
                                <div className="flex items-center gap-4">
                                  <button
                                    onClick={() => {
                                      if (!isPrescriptionComplete(item.id)) return;
                                      setAddedPrescriptionIds(current => new Set([...current, item.id]));
                                      setExpandedPrescriptionIds(current => {
                                        const next = new Set(current);
                                        next.delete(item.id);
                                        const currentIndex = cartRows.findIndex(row => row.item.id === item.id);
                                        const nextPrescription = cartRows[currentIndex + 1];
                                        if (nextPrescription) next.add(nextPrescription.item.id);
                                        return next;
                                      });
                                    }}
                                    disabled={!isPrescriptionComplete(item.id)}
                                    className="h-8 min-w-[76px] rounded-[7px] bg-[#111] px-4 text-[11px] font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-[#dfdfdc] disabled:text-[#92928f]"
                                  >
                                    Add Order
                                  </button>
                                  <button
                                    onClick={() => setExpandedPrescriptionIds(current => {
                                      const next = new Set(current);
                                      next.delete(item.id);
                                      return next;
                                    })}
                                    className="text-[11px] font-medium text-[#202020]"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : cartCardVariant === 4 ? (
                            <div className="rounded-[10px] bg-white px-5 py-5 ring-1 ring-[#DDE8E2]">
                              <div className="grid gap-x-5 gap-y-4 md:grid-cols-[1.1fr_1.1fr_0.56fr_0.56fr]">
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#858585]">Strength + Size</span>
                                  <input disabled value={item.detail.split("|")[0]?.trim() ?? item.detail} className="h-[34px] w-full rounded-[8px] border border-[#EAE8E1] bg-white px-3 text-[12px] font-medium text-[#cfcfcd] outline-none" />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#858585]">Size</span>
                                  <input disabled value={item.detail.split("|")[1]?.trim() ?? item.detail} className="h-[34px] w-full rounded-[8px] border border-[#EAE8E1] bg-white px-3 text-[12px] font-medium text-[#cfcfcd] outline-none" />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Authorized Refills <span className="text-[#b44b42]">*</span></span>
                                  <input type="number" min="0" placeholder="Days" value={details?.refills ?? ""} onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.refills)} />
                                </label>
                                <label className="block">
                                  <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Days Supply <span className="text-[#b44b42]">*</span></span>
                                  <input type="number" min="1" placeholder="Days" value={details?.days ?? ""} onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.days)} />
                                </label>
                                <div className="grid gap-x-5 gap-y-4 md:col-span-4 md:grid-cols-2">
                                  <label className="block min-w-0">
                                    <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Reason to Compound <span className="text-[#b44b42]">*</span></span>
                                    <select value={details?.reason ?? ""} onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.reason)}>
                                      <option value="" disabled>Select reason below or type out your own</option>
                                      <option>Patient requires a dosage form not commercially available.</option>
                                      <option>Patient requires excipient avoidance.</option>
                                      <option>Prescriber requested custom strength.</option>
                                    </select>
                                  </label>
                                  <label className="block min-w-0">
                                    <span className="mb-1.5 block text-[11px] font-semibold text-[#171717]">Directions of Use <span className="text-[#b44b42]">*</span></span>
                                    <select value={details?.directions ?? ""} onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)} className={"h-[34px] w-full rounded-[8px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.directions)}>
                                      <option value="" disabled>Select directions</option>
                                      <option>Inject (10 mg) subcutaneously once weekly.</option>
                                      <option>Inject (2.5 mg) subcutaneously once weekly.</option>
                                      <option>Inject (5 mg) subcutaneously once weekly.</option>
                                      <option>Use as directed by prescriber</option>
                                    </select>
                                  </label>
                                </div>
                              </div>
                              {openPrescriptionNoteIds.has(item.id) && (
                                <label className="mt-4 block rounded-[10px] bg-[#FAFAFA] px-4 py-3">
                                  <span className="mb-2 block text-[11px] font-semibold text-[#171717]">Prescription Note (Optional)</span>
                                  <textarea placeholder="Enter Prescription Note" className="min-h-[72px] w-full resize-y rounded-[8px] border border-[#EAE8E1] bg-white px-3 py-3 text-[12px] outline-none placeholder:text-[#b7b7b4] focus:border-[#183229]" />
                                </label>
                              )}
                              <div className="mt-5 flex items-center justify-between gap-4">
                                <button onClick={() => togglePrescriptionNote(item.id)} className="text-[12px] font-semibold text-[#171717]">
                                  {openPrescriptionNoteIds.has(item.id) ? "- Hide prescription note" : "+ Add a prescription note"}
                                </button>
                                <div className="flex items-center gap-4">
                                  <button
                                    onClick={() => {
                                      if (!isPrescriptionComplete(item.id)) return;
                                      setAddedPrescriptionIds(current => new Set([...current, item.id]));
                                      setExpandedPrescriptionIds(current => {
                                        const next = new Set(current);
                                        next.delete(item.id);
                                        const currentIndex = cartRows.findIndex(row => row.item.id === item.id);
                                        const nextPrescription = cartRows[currentIndex + 1];
                                        if (nextPrescription) next.add(nextPrescription.item.id);
                                        return next;
                                      });
                                    }}
                                    disabled={!isPrescriptionComplete(item.id)}
                                    className="h-8 min-w-[86px] rounded-[7px] bg-[#111] px-4 text-[12px] font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-[#dfdfdc] disabled:text-[#92928f]"
                                  >
                                    Add Order
                                  </button>
                                  <button
                                    onClick={() => setExpandedPrescriptionIds(current => {
                                      const next = new Set(current);
                                      next.delete(item.id);
                                      return next;
                                    })}
                                    className="text-[12px] font-medium text-[#202020]"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="grid gap-x-5 gap-y-4 md:grid-cols-[minmax(145px,0.24fr)_minmax(0,1fr)]">
                              <label className="block">
                                <span className="mb-1.5 block text-[10px] font-semibold text-[#303030]">Strength + Size</span>
                                <input disabled value={item.detail} className="h-[34px] w-full rounded-[8px] border border-[#EAE8E1] bg-white px-3 text-[12px] font-medium text-[#9a9a9a] outline-none" />
                              </label>
                              <label className="block">
                                <span className="mb-1.5 block text-[10px] font-semibold text-[#303030]">Size</span>
                                <input disabled value={item.detail.split("|")[1]?.trim() ?? item.detail} className="h-[34px] w-full rounded-[8px] border border-[#EAE8E1] bg-white px-3 text-[12px] font-medium text-[#9a9a9a] outline-none" />
                              </label>
                            </div>

                              <div className="grid gap-x-5 gap-y-4 md:grid-cols-[minmax(145px,0.24fr)_minmax(0,1fr)]">
                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Days Supply <span className="text-[#b44b42]">*</span></span>
                              <input type="number" min="1" placeholder="Enter Days" value={details?.days ?? ""} onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.days)} />
                            </label>

                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Directions of Use <span className="text-[#b44b42]">*</span></span>
                              <select value={details?.directions ?? ""} onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.directions)}>
                                <option value="" disabled>Select directions</option>
                                <option>Inject (2.5 mg) subcutaneously once weekly.</option>
                                <option>Inject (5 mg) subcutaneously once weekly.</option>
                                <option>Use as directed by prescriber</option>
                              </select>
                            </label>

                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Authorized Refills <span className="text-[#b44b42]">*</span></span>
                              <input type="number" min="0" placeholder="Refills" value={details?.refills ?? ""} onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.refills)} />
                            </label>

                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Reason to Compound <span className="text-[#b44b42]">*</span></span>
                              <select value={details?.reason ?? ""} onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.reason)}>
                                <option value="" disabled>Select reason below or type out your own</option>
                                <option>Patient requires a dosage form not commercially available.</option>
                                <option>Patient requires excipient avoidance.</option>
                                <option>Prescriber requested custom strength.</option>
                              </select>
                            </label>
                              </div>

                              <label className="mt-4 block">
                            <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Prescription Note (Optional)</span>
                            <textarea placeholder="Enter Prescription Note" className="min-h-[64px] w-full resize-y rounded-[7px] border border-[#dedede] bg-white px-3 py-3 text-[12px] outline-none focus:border-[#183229]" />
                              </label>

                              <div className="mt-4 flex justify-end gap-2">
                            <button
                              onClick={() => setExpandedPrescriptionIds(current => {
                                const next = new Set(current);
                                next.delete(item.id);
                                return next;
                              })}
                              className="h-9 rounded-[7px] border border-[#d3d3d0] bg-white px-4 text-[12px] font-semibold text-[#202020] transition-colors hover:bg-[#f3f3f1]"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                if (!isPrescriptionComplete(item.id)) return;
                                setAddedPrescriptionIds(current => new Set([...current, item.id]));
                                setExpandedPrescriptionIds(current => {
                                  const next = new Set(current);
                                  next.delete(item.id);
                                  const currentIndex = cartRows.findIndex(row => row.item.id === item.id);
                                  const nextPrescription = cartRows[currentIndex + 1];
                                  if (nextPrescription) next.add(nextPrescription.item.id);
                                  return next;
                                });
                              }}
                              disabled={!isPrescriptionComplete(item.id)}
                              className="h-9 min-w-[118px] rounded-[7px] bg-[#111] px-4 text-[12px] font-semibold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-[#dfdfdc] disabled:text-[#92928f]"
                            >
                              {addedPrescriptionIds.has(item.id) ? "Added to order" : "Add to order"}
                            </button>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </article>

                  {isLastInPharmacy && (
                    <div style={{ backgroundColor: activeCardTheme.shell, borderColor: activeCardTheme.border }} className={`rounded-b-[10px] px-5 transition-opacity ${hasFocusedOpenForm ? "opacity-55 hover:opacity-85" : ""} ${cartCardVariant === 3 ? "border-x border-b pb-4 pt-2" : cartCardVariant === 4 ? "pb-5 pt-1" : "pb-5 pt-2"}`}>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="max-w-[620px] text-[10px] font-medium leading-[16px] text-[#303030]">
                          {multiPatientShipping ? "Multi-patient shipping is supported — one shipping fee covers all patients." : "Multi-patient shipping is not supported — shipping is charged separately for each patient (" + shipmentCount + " shipping fees)."}
                        </p>
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </section>

          <aside className={`self-start bg-white transition-opacity xl:sticky xl:top-6 ${hasFocusedOpenForm ? "opacity-55 hover:opacity-85" : ""}`}>
            <h2 className="text-[24px] font-normal text-[#171717]">Order Total</h2>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-semibold text-[#202020]">Do you have a Voucher Code?</p>
                <ChevronDown size={17} className="rotate-180" />
              </div>
              <div className="mt-3 flex gap-2">
                <div className={`flex h-[31px] min-w-0 flex-1 items-center rounded-[8px] bg-white px-3 shadow-[inset_0_1px_0_#9E9EA0,inset_-1px_0_0_#9E9EA0,inset_0_-1px_0_#9E9EA0,inset_1px_0_0_#9E9EA0] ${appliedVoucher ? "text-[#202020] shadow-[inset_0_0_0_1px_#93B4FF]" : "focus-within:shadow-[inset_0_0_0_1px_#183229]"}`}>
                  <input
                    value={voucherCode}
                    onChange={event => { setVoucherCode(event.target.value); if (appliedVoucher) setAppliedVoucher(null); }}
                    onKeyDown={event => { if (event.key === "Enter") applyVoucher(); }}
                    placeholder="Enter voucher code"
                    className="min-w-0 flex-1 bg-transparent text-[12px] font-medium uppercase outline-none placeholder:normal-case placeholder:text-[#999]"
                  />
                </div>
                <button onClick={applyVoucher} disabled={Boolean(appliedVoucher) || !voucherCode.trim()} className="h-[31px] rounded-full border-0 bg-white px-5 text-[12px] font-medium text-[#666] shadow-[inset_0_1px_0_#9E9EA0,inset_-1px_0_0_#9E9EA0,inset_0_-1px_0_#9E9EA0,inset_1px_0_0_#9E9EA0] transition-colors hover:bg-[#f7f7f7] disabled:cursor-not-allowed disabled:opacity-45">Apply</button>
              </div>
              {appliedVoucher && <p className="mt-2 text-[10px] font-medium text-[#202020]">Voucher applied — 10% off, up to $50.</p>}
            </div>

            <div className="mt-5 space-y-3 text-[12px] text-[#262626]">
              <div className="flex justify-between gap-4"><span>Subtotal</span><span>{"$" + subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between gap-4"><span>Estimated Shipping & Handling</span><span>{"$" + shipping.toFixed(2)}</span></div>
              {appliedVoucher && <div className="flex justify-between gap-4 font-medium text-[#2563EB]"><span>Voucher ({appliedVoucher})</span><span>−${voucherDiscount.toFixed(2)}</span></div>}
              <div className="flex justify-between gap-4"><span>Estimated Tax</span><span>—</span></div>
              <div className="flex justify-between gap-4 border-y border-[#ececec] py-4 text-[13px] font-semibold"><span>Total</span><span>{"$" + total.toFixed(2)}</span></div>
            </div>

            <p className="mt-4 text-[11px] leading-[18px] text-[#4f4f4f]">Shipping fees are calculated by pharmacy and patient based on the selected method.</p>

            <button onClick={handleCheckout} className="mt-5 h-[46px] w-full rounded-full bg-[#111] text-[12px] font-medium text-white transition-opacity hover:opacity-90">
              Checkout
            </button>
          </aside>
        </div>
      </div>
      {previewOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#111]/35 backdrop-blur-[3px]">
          <button className="absolute inset-0 cursor-default" onClick={() => { setPreviewOpen(false); setPreviewSubmissionState("idle"); }} aria-label="Close preview" />
          <aside className="relative h-full w-full max-w-[500px] overflow-auto border-l border-[#e8e3df] bg-[#f7f6f2] shadow-[-24px_0_70px_rgba(24,24,24,0.16)]">
            <header className="sticky top-0 z-10 border-b border-[#eee8e3] bg-white/95 px-5 pb-5 pt-6 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8c95a1]">Checkout</p>
                  <h2 className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#171717]">Review and submit</h2>
                  <p className="mt-1 text-[12px] leading-[18px] text-[#6f7782]">Confirm items, payment, shipping, and totals before submitting.</p>
                </div>
                <button onClick={() => { setPreviewOpen(false); setPreviewSubmissionState("idle"); }} className="flex size-8 items-center justify-center rounded-full text-[#777] transition-colors hover:bg-[#f5f3ef] hover:text-[#111]" aria-label="Close preview">
                  <X size={17} strokeWidth={1.8} />
                </button>
              </div>
            </header>
            <div className="space-y-4 px-5 pb-6 pt-5">

            <section className="rounded-[18px] bg-white p-3 shadow-[0_18px_50px_rgba(24,24,24,0.07)]">
              <div className="px-2 pb-2">
                <p className="text-[13px] font-semibold text-[#1a1a1a]">Items</p>
              </div>
              {(showAllSummaryItems ? cartRowsWithNumbers : cartRowsWithNumbers.slice(0, 4)).map(({ patient, item, prescriptionNumber }, index) => {
                const supplies = patient.items.filter(candidate => candidate.kind === "supply" && !removed.has(candidate.id));
                const quantity = quantities[item.id] ?? 1;
                return (
                  <div key={item.id} className="mt-3 rounded-[14px] bg-[#fbfaf8] p-4">
                    <div className="flex items-center gap-2 rounded-[9px] bg-[#f7faf8] px-3 py-2">
                      <p className="min-w-0 truncate text-[11px] font-medium text-[#222]">{patient.name} ({patient.name.match(/\((.*?)\)/)?.[1] ?? "M"})</p>
                      <span className="shrink-0 rounded-full bg-[#ecefed] px-2 py-0.5 text-[9px] font-semibold text-[#69736e]">Prescription {prescriptionNumber}</span>
                    </div>
                    <div className="mt-3 flex items-start gap-3">
                      <CartItemImage item={item} />
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-semibold leading-[17px] text-[#1a1a1a]">{item.name}</p>
                        <p className="mt-1 text-[11px] leading-[15px] text-[#687078]">{item.detail}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-[13px] font-semibold text-[#1a1a1a]">${(item.price * quantity).toFixed(2)}</p>
                        <p className="mt-1 whitespace-nowrap text-[10px] text-[#747b82]">{quantity} × ${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div>{supplies.map(supply => {
                      const supplyQuantity = quantities[supply.id] ?? 1;
                      return (
                          <div key={supply.id} className="mt-3 flex items-start gap-3 rounded-[10px] bg-white p-2.5">
                          <CartItemImage item={supply} />
                          <div className="min-w-0 flex-1">
                            <p className="text-[12px] font-semibold leading-[16px] text-[#1a1a1a]">{supply.name} <span className="rounded bg-[#efefef] px-1.5 py-0.5 text-[8px] font-medium text-[#7b7b7b]">Supplies</span></p>
                            <p className="mt-1 text-[10px] text-[#747b82]">{supply.detail}</p>
                          </div>
                          <div className="shrink-0 text-right text-[10px] text-[#747b82]">
                            <p className="text-[12px] font-semibold text-[#1a1a1a]">${(supply.price * supplyQuantity).toFixed(2)}</p>
                            <p className="whitespace-nowrap">{supplyQuantity} × ${supply.price.toFixed(2)}</p>
                          </div>
                        </div>
                      );
                    })}</div>
                  </div>
                );
              })}
              {cartRowsWithNumbers.length > 4 && (
                <button
                  onClick={() => setShowAllSummaryItems(current => !current)}
                  className="flex w-full items-center justify-center gap-1.5 border-t border-[#e6e6e6] py-3 text-[11px] font-semibold text-[#202020] hover:bg-[#fbfaf8]"
                >
                  {showAllSummaryItems ? "Show fewer prescriptions" : `Show ${cartRowsWithNumbers.length - 4} more prescription${cartRowsWithNumbers.length - 4 === 1 ? "" : "s"}`}
                  <ChevronDown size={13} className={showAllSummaryItems ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
              )}
            </section>

            <section className="rounded-[18px] bg-white p-4 shadow-[0_18px_50px_rgba(24,24,24,0.07)]">
              <div>
                <div className="rounded-[12px] bg-[#fbfaf8] px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#171717]">Payment</p>
                  <p className="mt-0.5 text-[10px] text-[#8c8c8c]">{previewSubmitted ? "Payment method used for this order" : "Select the payment method for the prescription"}</p>
                </div>
                {previewSubmitted ? (
                  <div className="mt-3 inline-flex h-9 items-center gap-2 rounded-full border border-[#dce8df] bg-[#f7faf8] px-3 text-[12px] font-semibold text-[#183229]">
                    {paymentMethod === "patient" ? "Pay by Patient" : "Pay by Clinic"} {paymentMethod === "patient" ? <User size={13} /> : <Building2 size={13} />}
                  </div>
                ) : (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => setPaymentMethod("patient")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        paymentMethod === "patient"
                          ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Pay by Patient <User size={13} />
                    </button>
                    <button
                      onClick={() => setPaymentMethod("clinic")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        paymentMethod === "clinic"
                          ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Pay by Clinic <Building2 size={13} />
                    </button>
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-dashed border-[#17a34a] bg-white px-3 text-[12px] font-semibold text-[#0a8f3c] transition-colors hover:bg-[#f2f7f4]">
                      <Plus size={13} /> Credit Card
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-5 border-t border-[#eee8e3] pt-5">
                <div className="rounded-[12px] bg-[#fbfaf8] px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#171717]">Shipping</p>
                  <p className="mt-0.5 text-[10px] text-[#8c8c8c]">{previewSubmitted ? "Shipping destination for this order" : "Choose where to ship the prescription"}</p>
                </div>
                {previewSubmitted ? (
                  <div className="mt-3 inline-flex h-9 items-center gap-2 rounded-full border border-[#dce8df] bg-[#f7faf8] px-3 text-[12px] font-semibold text-[#183229]">
                    {shipTo === "patient" ? "Ship to Patient" : "Ship to Clinic"} {shipTo === "patient" ? <User size={13} /> : <Building2 size={13} />}
                  </div>
                ) : (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => setShipTo("patient")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        shipTo === "patient"
                          ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Ship to Patient <User size={13} />
                    </button>
                    <button
                      onClick={() => setShipTo("clinic")}
                      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                        shipTo === "clinic"
                          ? "border-[#0fbf9f] bg-[#d9fbf4] text-[#183229]"
                          : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                      }`}
                    >
                      Ship to Clinic <Building2 size={13} />
                    </button>
                  </div>
                )}
              </div>
            </section>

            <section className="rounded-[18px] bg-white p-4 shadow-[0_18px_50px_rgba(24,24,24,0.07)]">
              <div className="space-y-3 text-[13px]">
                <div className="flex justify-between text-[#222]"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-[#222]"><span>Estimated Shipping &amp; Handling</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
                <div className="flex justify-between text-[#222]"><span>Estimated Tax <span className="ml-1 inline-flex size-3 items-center justify-center rounded-full bg-[#222] text-[8px] text-white">?</span></span><span>—</span></div>
                <div className="flex justify-between border-y border-[#ededed] py-4 text-[14px] font-semibold text-[#1a1a1a]"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </section>

              <div className="sticky bottom-0 -mx-5 mt-2 border-t border-[#eee8e3] bg-white/95 px-5 py-4 backdrop-blur">
                <p className="rounded-[10px] bg-[#fbfaf8] px-3 py-3 text-[11px] leading-[16px] text-[#333]">Multi-Patient Orders can only be shipped to Clinic's address.</p>
                <div className="mt-4">
                  <CheckoutSubmissionFooter
                    state={previewSubmissionState}
                    submitLabel="Review and submit"
                    onSubmit={() => {
                      setPreviewSubmissionState("submitting");
                      window.setTimeout(() => setPreviewSubmissionState("submitted"), 2000);
                    }}
                    onGoToOrders={() => onNavigate("orders")}
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function CheckoutPrescriptionPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewSubmissionState, setReviewSubmissionState] = useState<CheckoutSubmissionState>("idle");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "altin-rx": true });
  const [shippingMethod, setShippingMethod] = useState<"ups" | "fedex">("ups");

  const patient = {
    name: "Altin Selimi",
    dob: "05/01/1986",
    phone: "+1 (646) 389-7766",
    email: "altin.selimi@example.com",
    identification: "NY:23444244343 (State-Issued ID)",
    address: "2823 Middletown Road\nThe Bronx, NY 10461",
  };

  const prescriptions = [
    {
      id: "altin-rx",
      patientName: "Altin Selimi",
      name: "Tirzepatide/Pyridoxine (B6)",
      detail: "20mg/25mg/mL | 1 (0.5mL) Vial",
      price: 125.43,
      qty: 1,
      badge: null,
      details: [
        ["Strength", "20mg/25mg/mL"],
        ["Format", "0.5mL vial"],
        ["Supply", "30 days"],
        ["Directions", "Inject 0.5mL subcutaneously once weekly as directed."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
    {
      id: "altin-supply",
      patientName: "Altin Selimi",
      name: "BD 27G X 1/2 Needle Only",
      detail: "1 Needle",
      price: 0,
      qty: 1,
      badge: "Supplies",
      details: [
        ["Format", "Needle"],
        ["Quantity", "1"],
        ["Supply", "Included with prescription"],
        ["Directions", "Use with prescribed injection."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
    {
      id: "jane-rx",
      patientName: "Jane Doe",
      name: "Tirzepatide/Pyridoxine (B6)",
      detail: "20mg/25mg/mL | 1 (0.5mL) Vial",
      price: 125.43,
      qty: 1,
      badge: null,
      details: [
        ["Strength", "20mg/25mg/mL"],
        ["Format", "0.5mL vial"],
        ["Supply", "30 days"],
        ["Directions", "Inject 0.5mL subcutaneously once weekly as directed."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
    {
      id: "jane-supply",
      patientName: "Jane Doe",
      name: "BD 27G X 1/2 Needle Only",
      detail: "1 Needle",
      price: 0,
      qty: 1,
      badge: "Supplies",
      details: [
        ["Format", "Needle"],
        ["Quantity", "1"],
        ["Supply", "Included with prescription"],
        ["Directions", "Use with prescribed injection."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
  ];

  const subtotal = prescriptions.reduce((sum, rx) => sum + rx.price * rx.qty, 0);
  const shipping = shippingMethod === "ups" ? 35 : 35;
  const total = subtotal + shipping;

  function ProductThumb({ badge }: { badge: string | null }) {
    if (badge) {
      return (
        <div className="flex size-11 items-center justify-center rounded-[8px] border border-[#eee] bg-[#f6f4f5]">
          <Syringe size={16} className="text-[#183229]" />
        </div>
      );
    }
    return (
      <div className="flex size-11 items-center justify-center overflow-hidden rounded-[8px] border border-[#eee] bg-gradient-to-b from-[#f7efe9] to-[#ece5b6]/45">
        <img src={blankVialReference} alt="" className="h-12 w-12 object-contain mix-blend-multiply" />
      </div>
    );
  }

  function PrescriptionCard({ rx }: { rx: (typeof prescriptions)[number] }) {
    const isOpen = expanded[rx.id] ?? false;
    return (
      <article className="rounded-[10px] border border-[#e8e3df] bg-white p-4 shadow-sm transition-colors hover:bg-[var(--app-soft-hover)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 gap-3">
            <ProductThumb badge={rx.badge} />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[14px] font-semibold leading-snug text-[#1a1a1a]">{rx.name}</h3>
                {rx.badge && <span className="rounded-[5px] bg-[#eef0f2] px-2 py-0.5 text-[10px] font-semibold text-[#667085]">{rx.badge}</span>}
              </div>
              <p className="mt-1 text-[12px] text-[#6f7782]">{rx.detail}</p>
              <p className="mt-1 text-[11px] font-medium text-[#8c95a1]">For {rx.patientName}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-[#183229]">
            <button className="flex size-8 items-center justify-center rounded-[7px] hover:bg-[#f2f7f4]" aria-label="Edit prescription"><Edit3 size={15} /></button>
            <button className="flex size-8 items-center justify-center rounded-[7px] hover:bg-[#f2f7f4]" aria-label="Remove prescription"><XCircle size={16} /></button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[14px] text-[#1a1a1a]">
          <span className="font-bold">{rx.price === 0 ? "Free" : `$${rx.price.toFixed(2)}`}</span>
          <span>x</span>
          <div className="inline-flex h-8 items-center overflow-hidden rounded-[8px] bg-[#eef0f2]">
            <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Minus size={13} /></button>
            <span className="flex h-8 min-w-8 items-center justify-center text-[13px] font-semibold">{rx.qty}</span>
            <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Plus size={13} /></button>
          </div>
        </div>

        <div className="mt-4 border-t border-[#eee8e3] pt-3">
          <button onClick={() => setExpanded((prev) => ({ ...prev, [rx.id]: !isOpen }))} className="flex items-center gap-1.5 text-[12px] font-semibold text-[#1a1a1a]">
            <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            {isOpen ? "Hide details" : "Show details"}
          </button>
          {isOpen && (
            <div className="mt-3 grid gap-4 border-t border-[#f1ede9] pt-3 md:grid-cols-2">
              <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-y-2 text-[12px]">
                {rx.details.map(([label, value]) => <div key={label} className="contents"><span className="font-semibold text-[#6f7782]">{label}</span><span className="text-[#1a1a1a]">{value}</span></div>)}
              </div>
              <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-y-2 text-[12px]">
                {rx.pharmacy.map(([label, value]) => <div key={label} className="contents"><span className="font-semibold text-[#6f7782]">{label}</span><span className="whitespace-pre-line text-[#1a1a1a]">{value}</span></div>)}
              </div>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className="-m-8 min-h-screen bg-[var(--app-soft-hover)] px-6 py-8">
      <div className="mx-auto max-w-[940px]">
        <div className="flex items-center gap-3">
          <PageBackButton onClick={() => onNavigate("cart-multi")} label="Back to cart" />
          <h1 className="text-[30px] font-semibold tracking-[-0.01em] text-[#1a1a1a]">New Prescription Order</h1>
        </div>

        <section className="mt-10">
          <h2 className="border-b border-[#e8e3df] pb-2 text-[16px] font-semibold text-[#1a1a1a]">Patient</h2>
          <div className="mt-4 grid gap-5 rounded-[12px] border border-[#e8e3df] bg-white p-5 shadow-sm md:grid-cols-2">
            <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-y-2 text-[13px]">
              <span className="font-semibold text-[#1a1a1a]">Name</span><span className="text-[#6f7782]">{patient.name}</span>
              <span className="font-semibold text-[#1a1a1a]">DoB</span><span className="text-[#6f7782]">{patient.dob}</span>
              <span className="font-semibold text-[#1a1a1a]">Phone</span><span className="text-[#6f7782]">{patient.phone}</span>
              <span className="font-semibold text-[#1a1a1a]">Email</span><span className="text-[#6f7782] underline">{patient.email}</span>
              <span className="font-semibold text-[#1a1a1a]">Identification</span><span className="text-[#6f7782]">{patient.identification}</span>
            </div>
            <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-y-2 self-start text-[13px]">
              <span className="font-semibold text-[#1a1a1a]">Address</span>
              <span className="whitespace-pre-line text-[#6f7782]">{patient.address}</span>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-[#e8e3df] pb-2 text-[16px] font-semibold text-[#1a1a1a]">Prescriptions</h2>
          <div className="mt-4 flex flex-col gap-3">
            {prescriptions.map((rx) => <PrescriptionCard key={rx.id} rx={rx} />)}
          </div>
          <button className="mt-4 flex h-10 items-center gap-2 rounded-[8px] border border-[#183229] bg-white px-4 text-[13px] font-semibold text-[#183229] transition-colors hover:bg-[#f2f7f4]">
            <Plus size={16} /> Add another prescription
          </button>
        </section>

        <section className="mt-8 pb-20">
          <h2 className="border-b border-[#e8e3df] pb-2 text-[16px] font-semibold text-[#1a1a1a]">Shipping</h2>
          <div className="mt-4 rounded-[12px] border border-[#e8e3df] bg-white p-5 shadow-sm">
            <p className="text-[13px] font-semibold text-[#1a1a1a]">Shipping method</p>
            <p className="mt-1 max-w-[760px] text-[12px] leading-relaxed text-[#6f7782]">Shipping time covers transit only. Pharmacy processing may take up to 3-5 business days, and pharmacies do not ship on weekends.</p>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { id: "ups" as const, price: "$35.00", label: "UPS Next Day Air (Priority)" },
                { id: "fedex" as const, price: "$35.00", label: "FedEx Standard Overnight" },
              ].map((option) => (
                <button key={option.id} onClick={() => setShippingMethod(option.id)} className={`flex min-h-14 items-center gap-4 rounded-[9px] border px-4 text-left transition-colors ${shippingMethod === option.id ? "border-[#183229] bg-[#f2f7f4]" : "border-[#d8dfdc] bg-white hover:border-[#183229]/40"}`}>
                  <span className={`flex size-6 items-center justify-center rounded-full border ${shippingMethod === option.id ? "border-[#183229]" : "border-[#8c95a1]"}`}>{shippingMethod === option.id && <span className="size-3 rounded-full bg-[#183229]" />}</span>
                  <span className="text-[14px] font-bold text-[#1a1a1a]">{option.price}</span>
                  <span className="text-[14px] font-semibold text-[#1a1a1a]">{option.label}</span>
                </button>
              ))}
            </div>

            <label className="mt-5 flex flex-col gap-1">
              <span className="text-[13px] font-semibold text-[#1a1a1a]">Ship to</span>
              <button className="flex h-11 items-center justify-between rounded-[8px] border border-[#d8dfdc] px-3 text-left text-[13px] text-[#1a1a1a]">
                ScriptLinkRx Demo - 2823 Middletown Road
                <ChevronDown size={15} className="text-[#6f7782]" />
              </button>
            </label>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => onNavigate("cart-multi")} className="h-10 rounded-[8px] border border-[#d8dfdc] bg-white px-4 text-[13px] font-semibold text-[#183229] transition-colors hover:bg-[#f2f7f4]">Cancel</button>
              <button onClick={() => { setReviewSubmissionState("idle"); setReviewOpen(true); }} className="h-10 rounded-[8px] bg-[#183229] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#244438]">Review order</button>
            </div>
          </div>
        </section>
      </div>

      {reviewOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#1a1a1a]/35 backdrop-blur-[2px]">
          <button className="absolute inset-0 cursor-default" onClick={() => { setReviewOpen(false); setReviewSubmissionState("idle"); }} aria-label="Close review" />
          <aside className="relative h-full w-full max-w-[430px] overflow-auto border-l border-[#e8e3df] bg-white px-6 py-6 shadow-2xl">
            <button onClick={() => { setReviewOpen(false); setReviewSubmissionState("idle"); }} className="mb-6 flex size-8 items-center justify-center rounded-[7px] text-[#183229] hover:bg-[#f6f4f5]" aria-label="Close review"><XCircle size={18} /></button>
            <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Review order</h2>

            <section className="mt-7">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Order for</h3>
              <div className="mt-4 rounded-[10px] border border-[#e8e3df] bg-[var(--app-soft-hover)] px-4 py-3">
                <p className="text-[13px] font-semibold text-[#1a1a1a]">{patient.name}</p>
                <p className="mt-1 whitespace-pre-line text-[12px] text-[#6f7782]">{patient.address}</p>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Shipping to</h3>
              <div className="mt-4 rounded-[10px] border border-[#e8e3df] px-4 py-3">
                <p className="text-[13px] font-semibold text-[#1a1a1a]">ScriptLinkRx Demo</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#6f7782]">2823 Middletown Road<br />The Bronx, NY 10461</p>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Prescriptions</h3>
              <div className="mt-4 flex flex-col gap-3">
                {prescriptions.map((rx) => (
                  <div key={rx.id} className="rounded-[10px] border border-[#e8e3df] px-4 py-4">
                    <div className="flex justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-semibold text-[#1a1a1a]">{rx.name}</p>
                          {rx.badge && <span className="rounded-[5px] bg-[#eef0f2] px-1.5 py-0.5 text-[9px] font-semibold text-[#667085]">{rx.badge}</span>}
                        </div>
                        <p className="mt-1 text-[12px] text-[#6f7782]">{rx.detail}</p>
                        <p className="mt-1 text-[11px] text-[#8c95a1]">{rx.patientName}</p>
                      </div>
                      <p className="text-[13px] font-semibold text-[#1a1a1a]">{rx.price === 0 ? "Free" : `$${(rx.price * rx.qty).toFixed(2)}`}</p>
                    </div>
                    <div className="mt-3 inline-flex h-8 items-center overflow-hidden rounded-[8px] bg-[#eef0f2]">
                      <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Minus size={13} /></button>
                      <span className="flex h-8 min-w-8 items-center justify-center text-[13px] font-semibold">{rx.qty}</span>
                      <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Plus size={13} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Summary</h3>
              <div className="mt-4 space-y-3 text-[14px]">
                <div className="flex justify-between text-[#6f7782]"><span>Subtotal</span><span className="font-semibold text-[#1a1a1a]">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-[#6f7782]"><span>Shipping</span><span className="font-semibold text-[#1a1a1a]">${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between border-t border-[#eee8e3] pt-4 font-bold text-[#1a1a1a]"><span>Total</span><span className="text-[#183229]">${total.toFixed(2)}</span></div>
              </div>
            </section>

            <div className="sticky bottom-0 -mx-6 mt-8 border-t border-[#eee8e3] bg-white px-6 py-4">
              <CheckoutSubmissionFooter
                state={reviewSubmissionState}
                submitLabel="Submit and pay"
                onEdit={() => { setReviewOpen(false); setReviewSubmissionState("idle"); }}
                onSubmit={() => {
                  setReviewSubmissionState("submitting");
                  window.setTimeout(() => setReviewSubmissionState("submitted"), 2000);
                }}
                onGoToOrders={() => onNavigate("orders")}
              />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function LoginPage({ onLogin, onRegister, onSingleSignOn }: { onLogin: () => void; onRegister: () => void; onSingleSignOn: () => void }) {
  const [loginRole, setLoginRole] = useState<"provider" | "pharmacy">("provider");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== "12345") {
      setLoginError("Incorrect password. Please try again.");
      return;
    }
    setLoginError("");
    onLogin();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',sans-serif] text-[#1a1a1a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(197,216,83,0.28),rgba(217,251,244,0.26)_32%,rgba(255,255,255,0)_72%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[620px] flex-col items-center px-6 pt-7">
        <div className="flex items-center gap-2.5">
          <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[30px] w-9 object-contain" />
          <span className="font-['Poppins',sans-serif] text-[18px] font-semibold uppercase tracking-wide text-[#183229]">
            S<span className="lowercase">CRIPTLINKrx</span>
          </span>
        </div>

        <section className="mt-[110px] w-full max-w-[430px] text-center">
          <h1 className="text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#1a1a1a]">
            Welcome back
          </h1>
          <p className="mt-5 text-[15px] text-[#1a1a1a]">Let’s get you logged in.</p>

          <form onSubmit={submitLogin} className="mt-8">
            <label className="block text-left">
              <span className="text-[13px] font-medium text-[#1a1a1a]">Email address</span>
              <input
                type="email"
                value={loginRole === "provider" ? "demo@scriptlinkrx.com" : "pharmacy@scriptlinkrx.com"}
                readOnly
                className="mt-2 h-[52px] w-full rounded-[8px] border border-[#1a1a1a] bg-white px-4 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]"
                placeholder="Email"
              />
            </label>
            <label className="mt-4 block text-left">
              <span className="text-[13px] font-medium text-[#1a1a1a]">Password</span>
              <div className="mt-2 flex h-[52px] items-center rounded-[8px] border border-[#1a1a1a] bg-white px-4 focus-within:border-[#183229]">
                <input
                  type="password"
                  value={password}
                  onChange={event => { setPassword(event.target.value); if (loginError) setLoginError(""); }}
                  className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782]"
                  placeholder="Password"
                />
                <Eye size={17} className="text-[#6f7782]" />
              </div>
            </label>
            {loginError && <p className="mt-2 text-left text-[11px] font-medium text-[#c94f43]">{loginError}</p>}
            <button type="submit" className="mt-3 flex h-[46px] w-full items-center justify-center rounded-[999px] bg-[#1a1a1a] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]">
              Continue to log in
            </button>
          </form>

          <div className="my-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <span className="h-px bg-[#1a1a1a]/45" />
            <span className="text-[12px] text-[#6f7782]">Or other log-in options</span>
            <span className="h-px bg-[#1a1a1a]/45" />
          </div>

          <button
            onClick={onSingleSignOn}
            className="flex h-[48px] w-full items-center justify-center gap-5 rounded-[999px] border border-[#cfd6d2] bg-white text-[14px] font-semibold text-[#1a1a1a] transition-colors hover:border-[#183229]/50 hover:bg-[#fbfaf8]"
          >
            Sign in with Single-Sign-On Link
          </button>

          <div className="mt-7 space-y-3 text-[12px] font-medium text-[#6f7782]">
            <p>
              Don't have an account?{" "}
              <button type="button" onClick={onRegister} className="inline cursor-pointer align-baseline text-[12px] font-medium leading-none text-[#6f7782] transition-colors hover:text-[#1a1a1a]">
                Register here
              </button>
            </p>
            <p>
              Are you a Pharmacy user?{" "}
              <button type="button" onClick={() => setLoginRole("pharmacy")} className="inline cursor-pointer align-baseline text-[12px] font-medium leading-none text-[#6f7782] transition-colors hover:text-[#1a1a1a]">
                Login here
              </button>
            </p>
          </div>

          <button type="button" className="mt-8 text-[12px] font-semibold text-[#1a1a1a] underline underline-offset-4 hover:text-[#183229]">
            Forgot password?
          </button>
        </section>
      </div>
    </main>
  );
}

function OrganizationSetupPage({ onCreate }: { onCreate: () => void }) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [visiblePassword, setVisiblePassword] = useState<"current" | "new" | "confirm" | null>(null);

  function submitOrganization(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (currentPassword !== "12345") {
      setPasswordError("Current password is incorrect.");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    setPasswordError("");
    setCurrentStep(2);
  }

  const canContinue = currentPassword.length > 0 && newPassword.length >= 8 && confirmPassword.length > 0;
  const stepContent: Record<typeof currentStep, { title: string; subtitle: string }> = {
    1: {
      title: "Set Your Password",
      subtitle: "Create a secure password for your account. You'll use this to log in.",
    },
    2: {
      title: "Confirm Your Profile Details",
      subtitle: "Please review and confirm your professional information.",
    },
    3: {
      title: "Provider Credentials",
      subtitle: "Please provide your professional credentials.",
    },
    4: {
      title: "Set Your Digital Signature",
      subtitle: "Draw your signature below. This will be used on your prescriptions.",
    },
    5: {
      title: "Add Pay by Clinic Card",
      subtitle: "Add a credit card for subscription and payment processing.",
    },
  };
  const activeStepContent = stepContent[currentStep];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-10 font-['Inter',sans-serif] text-[#171717]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(197,216,83,0.28),rgba(217,251,244,0.26)_32%,rgba(255,255,255,0)_72%)]" />
      <section className="relative w-full max-w-[470px] px-5 py-8">
        <div className="mx-auto w-full">
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[27px] w-8 object-contain" />
            <span className="font-['Poppins',sans-serif] text-[15px] font-semibold uppercase tracking-wide text-[#183229]">
              S<span className="lowercase">CRIPTLINKrx</span>
            </span>
          </div>

          <div className="rounded-[14px] border border-white/80 bg-white/65 px-7 py-8 shadow-[0_14px_40px_rgba(24,50,41,0.08)] backdrop-blur-[18px] sm:px-9">
            <div className="text-center">
              <h1 className="text-[21px] font-semibold tracking-[-0.025em]">{activeStepContent.title}</h1>
              <p className="mt-1.5 text-[11px] text-[#747c78]">{activeStepContent.subtitle}</p>
              <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3974d8]">Step {currentStep} of 5</p>
            </div>

            <div className="my-6 h-px bg-[#eceeec]" />
            {currentStep === 1 ? <>
              <form onSubmit={submitOrganization} className="space-y-3.5">
              {[
                { id: "current" as const, label: "Current Password", value: currentPassword, setValue: setCurrentPassword, placeholder: "Enter your current password" },
                { id: "new" as const, label: "New Password", value: newPassword, setValue: setNewPassword, placeholder: "Enter your new password" },
                { id: "confirm" as const, label: "Confirm New Password", value: confirmPassword, setValue: setConfirmPassword, placeholder: "Re-enter your new password" },
              ].map(field => (
                <label key={field.id} className="block">
                  <span className="mb-1.5 block text-[11px] font-medium">{field.label} <span className="text-[#b4473d]">*</span></span>
                  <div className="flex h-10 items-center rounded-[8px] border border-[#d7dcda] bg-white px-3 focus-within:border-[1.5px] focus-within:border-[#183229]">
                    <input type={visiblePassword === field.id ? "text" : "password"} value={field.value} onChange={event => { field.setValue(event.target.value); if (passwordError) setPasswordError(""); }} placeholder={field.placeholder} className="min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#a3aaa6]" />
                    <button type="button" onClick={() => setVisiblePassword(current => current === field.id ? null : field.id)} className="text-[#7d8581]" aria-label={`Show ${field.label.toLowerCase()}`}><Eye size={14} /></button>
                  </div>
                  {field.id === "new" && <span className="mt-1 block text-[9px] text-[#818985]">Password must be at least 8 characters long</span>}
                </label>
              ))}

              {passwordError && <p className="text-[10px] font-medium text-[#c94f43]">{passwordError}</p>}
              <button type="submit" disabled={!canContinue} className="flex h-10 w-full items-center justify-center rounded-[8px] bg-[#111] text-[12px] font-semibold text-white transition-colors hover:bg-[#183229] disabled:cursor-not-allowed disabled:bg-[#d5d8d6] disabled:text-[#8b918e]">Continue</button>
              </form>
            </> : currentStep === 2 ? <>
              <form onSubmit={event => { event.preventDefault(); setCurrentStep(3); }} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <ProfileField label="First Name" defaultValue="Adnan" required />
                  <ProfileField label="Last Name" defaultValue="Godanci" required />
                </div>
                <ProfileField label="Phone Number" defaultValue="(646)-617-9881" required />
                <div className="h-px bg-[#eceeec]" />
                <div className="grid grid-cols-2 gap-3">
                  <ProfileField label="Address Line 1" defaultValue="123 Main Street" required />
                  <ProfileField label="Address Line 2" placeholder="Apt, Suite, Floor (optional)" />
                </div>
                <div className="grid grid-cols-[1fr_1fr_.8fr] gap-3">
                  <ProfileField label="City" defaultValue="Bronx" required />
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-medium">State <span className="text-[#b4473d]">*</span></span>
                    <select defaultValue="New York" className="h-10 w-full rounded-[8px] border border-[#d7dcda] bg-white px-3 text-[11px] outline-none focus:border-[1.5px] focus:border-[#183229]">
                      <option>New York</option>
                      <option>Florida</option>
                      <option>Texas</option>
                    </select>
                  </label>
                  <ProfileField label="Zipcode" defaultValue="11710" required />
                </div>
                <ProfileField label="Fax Number" placeholder="Enter fax (optional)" />
                <div className="space-y-2 pt-1">
                  <button type="submit" className="h-10 w-full rounded-[8px] bg-[#111] px-6 text-[11px] font-semibold text-white hover:bg-[#183229]">Continue</button>
                  <button type="button" onClick={() => setCurrentStep(1)} className="h-9 w-full rounded-[8px] text-[11px] font-semibold text-[#4f5753] hover:bg-white/70 hover:text-[#183229]">Back</button>
                </div>
              </form>
            </> : currentStep === 3 ? <>
              <form onSubmit={event => { event.preventDefault(); setCurrentStep(4); }} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <ProfileField label="NPI Number" defaultValue="1770027724" required />
                  <ProfileField label="License Number" defaultValue="LEA1240812470" required />
                </div>
                <ProfileField label="DEA Number" defaultValue="MK5054793" />
                <div className="space-y-2 pt-1">
                  <button type="submit" className="h-10 w-full rounded-[8px] bg-[#111] px-6 text-[11px] font-semibold text-white hover:bg-[#183229]">Continue</button>
                  <button type="button" onClick={() => setCurrentStep(2)} className="h-9 w-full rounded-[8px] text-[11px] font-semibold text-[#4f5753] hover:bg-white/70 hover:text-[#183229]">Back</button>
                </div>
              </form>
            </> : currentStep === 4 ? <>
              <SignaturePad />
              <div className="mt-4 space-y-2">
                <button type="button" onClick={() => setCurrentStep(5)} className="h-10 w-full rounded-[8px] bg-[#111] px-6 text-[11px] font-semibold text-white hover:bg-[#183229]">Continue</button>
                <button type="button" onClick={() => setCurrentStep(3)} className="h-9 w-full rounded-[8px] text-[11px] font-semibold text-[#4f5753] hover:bg-white/70 hover:text-[#183229]">Back</button>
              </div>
            </> : <>
              <PaymentMethodOnboardingStep onBack={() => setCurrentStep(4)} onComplete={onCreate} />
            </>}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProfileField({ label, defaultValue, placeholder, required = false }: { label: string; defaultValue?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-[11px] font-medium">{label} {required && <span className="text-[#b4473d]">*</span>}</span>
      <input required={required} defaultValue={defaultValue} placeholder={placeholder} className="h-10 w-full rounded-[8px] border border-[#d7dcda] bg-white px-3 text-[11px] outline-none placeholder:text-[#a3aaa6] focus:border-[1.5px] focus:border-[#183229]" />
    </label>
  );
}

function PaymentMethodOnboardingStep({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const [authorized, setAuthorized] = useState(true);
  const inputClass = "h-10 w-full rounded-[8px] border border-[#d7dcda] bg-white px-3 text-[11px] outline-none placeholder:text-[#a3aaa6] focus:border-[1.5px] focus:border-[#183229]";
  const selectClass = `${inputClass} appearance-auto`;

  return (
    <form onSubmit={(event) => { event.preventDefault(); onComplete(); }} className="space-y-4">
      <div className="px-0 py-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] leading-[14px] text-[#6f7782]">You can add a payment method later from settings.</p>
          <button type="button" onClick={onComplete} className="shrink-0 text-[10px] font-semibold text-[#3974d8] underline-offset-4 transition-colors hover:text-[#1f5fc5] hover:underline">
            Skip
          </button>
        </div>
      </div>

      <div className="space-y-3.5">
        <label className="block">
          <span className="mb-1.5 block text-[11px] font-medium">Cardholder Name <span className="text-[#b4473d]">*</span></span>
          <input required placeholder="Enter name as it appears on card" className={inputClass} />
        </label>

        <div>
          <div className="space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-[10px] text-[#4f5753]">Card Number</span>
              <div className="flex h-10 items-center rounded-[8px] border border-[#d7dcda] bg-white px-3 focus-within:border-[1.5px] focus-within:border-[#183229]">
                <input required inputMode="numeric" placeholder="4111 1111 1111 1111" className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-[#6f7782]" />
                <span className="ml-3 flex items-center gap-1 text-[9px] font-bold">
                  <span className="italic text-[#1434CB]">VISA</span>
                  <span className="size-4 rounded-full bg-[#EB001B]" />
                  <span className="-ml-2 size-4 rounded-full bg-[#F79E1B] opacity-90" />
                  <span className="rounded-[3px] bg-[#1F72CD] px-1.5 py-1 text-[7px] leading-none text-white">AMEX</span>
                  <span className="rounded-[3px] bg-[#333] px-1.5 py-1 text-[7px] leading-none text-white">DISC</span>
                </span>
              </div>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1.5 block text-[10px] text-[#4f5753]">Expiration</span>
                <input required placeholder="MM / YY" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[10px] text-[#4f5753]">CVV/CVC</span>
                <input required placeholder="CVC" className={inputClass} />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[10px] text-[#4f5753]">Address Line 1</span>
              <input required placeholder="Address Line 1" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[10px] text-[#4f5753]">Address Line 2</span>
              <input placeholder="Address Line 2" className={inputClass} />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1.5 block text-[10px] text-[#4f5753]">City</span>
                <input required placeholder="City" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[10px] text-[#4f5753]">State</span>
                <select required defaultValue="" className={selectClass}>
                  <option value="" disabled>Select State</option>
                  <option>New York</option>
                  <option>Florida</option>
                  <option>Texas</option>
                  <option>California</option>
                </select>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1.5 block text-[10px] text-[#4f5753]">Country</span>
                <select required defaultValue="United States" className={selectClass}>
                  <option>United States</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[10px] text-[#4f5753]">Zip</span>
                <input required placeholder="12345" className={inputClass} />
              </label>
            </div>
          </div>
        </div>
      </div>

      <label className="flex items-start gap-3 text-[10px] font-semibold leading-[14px] text-[#333b36]">
        <input type="checkbox" checked={authorized} onChange={event => setAuthorized(event.target.checked)} className="mt-0.5 size-3.5 accent-black" />
        <span>I authorize SCRIPTLINKRX.COM LLC to charge the credit card account listed. If this credit card needs to be updated, a new Credit Card Authorization form will be required to be filled out.</span>
      </label>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] text-[#4f5753]">Sign your authorization:</p>
          <button type="button" className="h-8 rounded-[7px] border border-[#d7dcda] bg-white px-4 text-[11px] font-medium text-[#333] hover:bg-[#f8f8f8]">Clear</button>
        </div>
        <div className="h-[118px] rounded-[9px] border border-[#d7dcda] bg-white" />
      </div>

      <div className="space-y-2 pt-1">
        <button type="submit" disabled={!authorized} className="h-10 w-full rounded-[8px] bg-[#111] px-6 text-[11px] font-semibold text-white hover:bg-[#183229] disabled:cursor-not-allowed disabled:bg-[#d5d8d6] disabled:text-[#8b918e]">Complete Setup</button>
        <button type="button" onClick={onBack} className="h-9 w-full rounded-[8px] text-[11px] font-semibold text-[#4f5753] hover:bg-white/70 hover:text-[#183229]">Back</button>
      </div>
    </form>
  );
}

function SignaturePad() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);

  function getPoint(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = event.currentTarget;
    const bounds = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - bounds.left) * (canvas.width / bounds.width),
      y: (event.clientY - bounds.top) * (canvas.height / bounds.height),
    };
  }

  function startDrawing(event: ReactPointerEvent<HTMLCanvasElement>) {
    const context = event.currentTarget.getContext("2d");
    if (!context) return;
    const point = getPoint(event);
    drawingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    context.beginPath();
    context.moveTo(point.x, point.y);
  }

  function draw(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return;
    const context = event.currentTarget.getContext("2d");
    if (!context) return;
    const point = getPoint(event);
    context.lineWidth = 2.5;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#183229";
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  function clearSignature() {
    const canvas = canvasRef.current;
    canvas?.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="mt-5">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[11px] font-medium">Sign your signature:</span>
        <button type="button" onClick={clearSignature} className="rounded-[7px] border border-[#d7dcda] bg-white px-3 py-1 text-[10px] font-medium text-[#4f5753] hover:bg-[#f6f7f6]">Clear</button>
      </div>
      <canvas
        ref={canvasRef}
        width={720}
        height={220}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={() => { drawingRef.current = false; }}
        onPointerCancel={() => { drawingRef.current = false; }}
        className="h-[145px] w-full touch-none rounded-[9px] border border-[#d7dcda] bg-white/80"
        aria-label="Digital signature drawing area"
      />
    </div>
  );
}

function SingleSignOnPage({ onBackToLogin }: { onBackToLogin: () => void }) {
  function submitSingleSignOn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onBackToLogin();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',sans-serif] text-[#1a1a1a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(197,216,83,0.28),rgba(217,251,244,0.26)_32%,rgba(255,255,255,0)_72%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[620px] flex-col items-center px-6 pt-7">
        <button type="button" onClick={onBackToLogin} className="flex cursor-pointer items-center gap-2.5">
          <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[30px] w-9 object-contain" />
          <span className="font-['Poppins',sans-serif] text-[18px] font-semibold uppercase tracking-wide text-[#183229]">
            S<span className="lowercase">CRIPTLINKrx</span>
          </span>
        </button>

        <section className="mt-[110px] w-full max-w-[430px] text-center">
          <h1 className="text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#1a1a1a]">
            Single sign-on
          </h1>
          <p className="mx-auto mt-5 max-w-[340px] text-[15px] leading-6 text-[#1a1a1a]">
            Get a single sign-on link sent to your email to log in without a password.
          </p>

          <form onSubmit={submitSingleSignOn} className="mt-8">
            <label className="block text-left">
              <span className="text-[13px] font-medium text-[#1a1a1a]">Email address</span>
              <input
                type="email"
                className="mt-2 h-[52px] w-full rounded-[8px] border border-[#1a1a1a] bg-white px-4 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]"
                placeholder="info@mail.com"
              />
            </label>
            <button type="submit" className="mt-3 flex h-[46px] w-full items-center justify-center rounded-[999px] bg-[#1a1a1a] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]">
              Send Single Sign-On Link
            </button>
          </form>

          <button type="button" onClick={onBackToLogin} className="mt-8 cursor-pointer text-[12px] font-semibold text-[#1a1a1a] underline underline-offset-4 hover:text-[#183229]">
            Back to Login
          </button>
        </section>
      </div>
    </main>
  );
}

function RegisterPage({ onBackToLogin }: { onBackToLogin: () => void }) {
  function submitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onBackToLogin();
  }

  const inputClass = "mt-2 h-[52px] w-full rounded-[8px] border border-[#1a1a1a] bg-white px-4 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]";
  const selectClass = `${inputClass} appearance-none pr-10`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',sans-serif] text-[#1a1a1a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(197,216,83,0.28),rgba(217,251,244,0.26)_32%,rgba(255,255,255,0)_72%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[620px] flex-col items-center px-6 pt-7">
        <button type="button" onClick={onBackToLogin} className="flex cursor-pointer items-center gap-2.5">
          <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[30px] w-9 object-contain" />
          <span className="font-['Poppins',sans-serif] text-[18px] font-semibold uppercase tracking-wide text-[#183229]">
            S<span className="lowercase">CRIPTLINKrx</span>
          </span>
        </button>

        <section className="mt-[88px] w-full max-w-[520px] text-center">
          <h1 className="text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#1a1a1a]">
            Create account
          </h1>
          <p className="mx-auto mt-5 max-w-[390px] text-[15px] leading-6 text-[#1a1a1a]">
            Join ScriptLinkRx as a provider and tell us where your business operates.
          </p>

          <form onSubmit={submitRegister} className="mt-8 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-left">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Business Name <span className="text-[#c7532f]">*</span></span>
                <input className={inputClass} placeholder="Enter business name" />
              </label>
              <label className="block text-left">
                <span className="text-[13px] font-medium text-[#1a1a1a]">NPI Number <span className="text-[#8c95a1]">(Optional)</span></span>
                <input className={inputClass} placeholder="1234567890" />
              </label>
              <label className="relative block text-left">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Business Type <span className="text-[#c7532f]">*</span></span>
                <select className={selectClass} defaultValue="">
                  <option value="" disabled>Select a type</option>
                  <option>Clinic</option>
                  <option>Prescriber Group</option>
                  <option>Pharmacy</option>
                </select>
                <ChevronDown size={15} className="pointer-events-none absolute bottom-4 right-4 text-[#6f7782]" />
              </label>
              <label className="relative block text-left">
                <span className="text-[13px] font-medium text-[#1a1a1a]">User Type <span className="text-[#c7532f]">*</span></span>
                <select className={selectClass} defaultValue="">
                  <option value="" disabled>Select user type...</option>
                  <option>Manager</option>
                  <option>Prescriber</option>
                </select>
                <ChevronDown size={15} className="pointer-events-none absolute bottom-4 right-4 text-[#6f7782]" />
              </label>
            </div>

            <div className="my-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <span className="h-px bg-[#1a1a1a]/45" />
              <span className="text-[12px] text-[#6f7782]">Business address</span>
              <span className="h-px bg-[#1a1a1a]/45" />
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-left">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Address Line 1 <span className="text-[#c7532f]">*</span></span>
                  <input className={inputClass} placeholder="Start typing address..." />
                </label>
                <label className="block text-left">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Address Line 2</span>
                  <input className={inputClass} placeholder="Apt, suite, floor (optional)" />
                </label>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <label className="block text-left">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">City <span className="text-[#c7532f]">*</span></span>
                  <input className={inputClass} placeholder="City" />
                </label>
                <label className="relative block text-left">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">State <span className="text-[#c7532f]">*</span></span>
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>Select state</option>
                    <option>New York</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>Florida</option>
                  </select>
                  <ChevronDown size={15} className="pointer-events-none absolute bottom-4 right-4 text-[#6f7782]" />
                </label>
                <label className="block text-left">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Zip Code <span className="text-[#c7532f]">*</span></span>
                  <input className={inputClass} placeholder="12345" />
                </label>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block text-left">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Business Phone <span className="text-[#c7532f]">*</span></span>
                  <input className={inputClass} placeholder="(555) 123-4567" />
                </label>
                <label className="block text-left">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Business Fax</span>
                  <input className={inputClass} placeholder="(555) 123-4567" />
                </label>
              </div>
            </div>

            <button type="submit" className="mt-6 flex h-[46px] w-full items-center justify-center rounded-[999px] bg-[#1a1a1a] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]">
              Continue registration
            </button>

            <div className="mt-7 text-center text-[12px] font-medium text-[#6f7782]">
              Already have an account?{" "}
              <button type="button" onClick={onBackToLogin} className="cursor-pointer font-semibold text-[#1a1a1a] underline underline-offset-4 hover:text-[#183229]">
                Back to login
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

function RequestDemoPage({ onBackToLanding, onLoginClick }: { onBackToLanding: () => void; onLoginClick: () => void }) {
  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onLoginClick();
  }

  const inputClass = "mt-2 h-[52px] w-full rounded-[8px] border border-[#1a1a1a] bg-white px-4 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]";
  const selectClass = `${inputClass} appearance-none pr-10`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',sans-serif] text-[#1a1a1a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(197,216,83,0.28),rgba(217,251,244,0.26)_32%,rgba(255,255,255,0)_72%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[980px] flex-col items-center px-6 pt-7">
        <button type="button" onClick={onBackToLanding} className="flex cursor-pointer items-center gap-2.5">
          <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[30px] w-9 object-contain" />
          <span className="font-['Poppins',sans-serif] text-[18px] font-semibold uppercase tracking-wide text-[#183229]">
            S<span className="lowercase">CRIPTLINKrx</span>
          </span>
        </button>

        <section className="mt-[88px] w-full max-w-[620px] text-center">
          <h1 className="text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#1a1a1a]">
            Request a demo
          </h1>
          <p className="mx-auto mt-5 max-w-[440px] text-[15px] leading-6 text-[#1a1a1a]">
            See how ScriptLinkRx can simplify compounding workflows for your clinic or pharmacy.
          </p>

          <form onSubmit={submitDemo} className="mt-8 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Business Name <span className="text-[#c7532f]">*</span></span>
                <input className={inputClass} placeholder="Enter your business name" />
              </label>
              <label className="relative block">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Business Type <span className="text-[#c7532f]">*</span></span>
                <select className={selectClass} defaultValue="">
                  <option value="" disabled>Select business type</option>
                  <option>Clinic</option>
                  <option>Prescriber Group</option>
                  <option>Pharmacy</option>
                </select>
                <ChevronDown size={15} className="pointer-events-none absolute bottom-4 right-4 text-[#6f7782]" />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Contact Name <span className="text-[#c7532f]">*</span></span>
                <input className={inputClass} placeholder="Enter your full name" />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Business Address <span className="text-[#c7532f]">*</span></span>
                <input className={inputClass} placeholder="Enter your business address" />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Contact Email <span className="text-[#c7532f]">*</span></span>
                <input type="email" className={inputClass} placeholder="Enter your email address" />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Contact Phone <span className="text-[#c7532f]">*</span></span>
                <input className={inputClass} placeholder="(555) 123-4567" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-[13px] font-medium text-[#1a1a1a]">Notes</span>
                <textarea className="mt-2 min-h-[118px] w-full resize-none rounded-[8px] border border-[#1a1a1a] bg-white px-4 py-3 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]" placeholder="Any additional details or questions..." />
              </label>
            </div>

            <button type="submit" className="mt-5 flex h-[46px] w-full items-center justify-center rounded-[999px] bg-[#1a1a1a] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]">
              Submit request
            </button>

            <div className="mt-7 text-center text-[12px] font-medium text-[#6f7782]">
              Already have access?{" "}
              <button type="button" onClick={onLoginClick} className="cursor-pointer font-semibold text-[#1a1a1a] underline underline-offset-4 hover:text-[#183229]">
                Back to login
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

function ContactPage({ onBackToLanding }: { onBackToLanding: () => void }) {
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onBackToLanding();
  }

  const inputClass = "mt-2 h-[46px] w-full rounded-[8px] border border-[#1a1a1a] bg-white px-4 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]";

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',sans-serif] text-[#1a1a1a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(197,216,83,0.28),rgba(217,251,244,0.26)_32%,rgba(255,255,255,0)_72%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[980px] flex-col items-center px-6 pt-7">
        <button type="button" onClick={onBackToLanding} className="flex cursor-pointer items-center gap-2.5">
          <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[30px] w-9 object-contain" />
          <span className="font-['Poppins',sans-serif] text-[18px] font-semibold uppercase tracking-wide text-[#183229]">
            S<span className="lowercase">CRIPTLINKrx</span>
          </span>
        </button>

        <section className="mt-[92px] w-full text-center">
          <h1 className="text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#1a1a1a]">Reach ScriptLinkRx</h1>
          <p className="mx-auto mt-5 max-w-[460px] text-[15px] leading-6 text-[#1a1a1a]">
            A simple place for support, partnership questions, and compliance verification.
          </p>

          <div className="mt-12 grid items-stretch gap-6 text-left md:grid-cols-2">
            <section className="relative h-full overflow-hidden rounded-[22px] border border-white/70 bg-white/45 p-7 shadow-[0_24px_70px_rgba(24,50,41,0.10),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/65 to-transparent" />
              <div className="relative">
                <p className="text-[11px] font-normal uppercase tracking-[0.16em] text-[#8c95a1]">Contact details</p>
                <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#1a1a1a]">ScriptLinkRx</h2>
                <div className="mt-6 divide-y divide-white/70 rounded-[14px] border border-white/70 bg-white/45 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
                  {[
                    ["Support", "support@scriptlinkrx.com"],
                    ["Sales", "sales@scriptlinkrx.com"],
                    ["Phone", "(917) 284-8124"],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[82px_1fr] gap-5 py-3">
                      <span className="text-[12px] font-medium text-[#6f7782]">{label}</span>
                      <span className="break-words text-[13px] font-semibold text-[#1a1a1a]">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/70 pt-7">
                  <p className="text-[11px] font-normal uppercase tracking-[0.16em] text-[#8c95a1]">Partner pharmacy</p>
                  <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.03em] text-[#1a1a1a]">Precision Compounding Pharmacy</h3>
                  <div className="mt-5 rounded-[14px] border border-white/70 bg-white/40 p-4 text-[12px] leading-5 text-[#56615b] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                    <p>2657 Merrick Road, Bellmore, NY 11710</p>
                    <div className="mt-3 space-y-2">
                      <p>(516) 833-6262</p>
                      <p>Text: 1-855-535-8333</p>
                      <p>Fax: (516) 222-0605</p>
                      <p>hello@mypcphealth.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <form onSubmit={submitContact} className="flex h-full flex-col rounded-[18px] border border-[#e7e4dd] bg-white p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8c95a1]">Send a message</p>
              <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Name <span className="text-[#c7532f]">*</span></span>
                  <input className={inputClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Organization</span>
                  <input className={inputClass} placeholder="Company name" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Email <span className="text-[#c7532f]">*</span></span>
                  <input type="email" className={inputClass} placeholder="you@company.com" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Message <span className="text-[#c7532f]">*</span></span>
                  <textarea className="mt-2 min-h-[104px] w-full resize-none rounded-[8px] border border-[#1a1a1a] bg-white px-4 py-3 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]" placeholder="How can we help?" />
                </label>
              </div>
              <button type="submit" className="mt-5 flex h-[46px] w-full items-center justify-center rounded-[999px] bg-[#1a1a1a] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]">
                Send message
              </button>
            </form>
          </div>

        </section>
      </div>
    </main>
  );
}

function LandingPage({ onLoginClick, onRegisterClick, onRequestDemoClick, onContactClick }: { onLoginClick: () => void; onRegisterClick: () => void; onRequestDemoClick: () => void; onContactClick: () => void }) {
  const pharmacyLogos = [
    "R Pharmacy",
    "pharm a",
    "Precision Medicine",
    "Precision Medicine",
    "Silver Pharmacy",
    "1st Choice",
    "R TX",
    "R TX",
    "THESIS",
    "DCA",
    "Optimal",
    "Optimal",
    "DCA",
    "Optimal",
  ];

  const products = [
    { image: landingNadInjection, name: "NAD+ Injection", dosage: "20mg/mL" },
    { image: landingTestosterone, name: "Testosterone Cypionate", dosage: "200mg/mL" },
    { image: landingGlutathione, name: "Glutathione", dosage: "200mg/mL" },
    { image: landingTriMix, name: "TRI-MIX", dosage: "30mg/mL" },
    { image: landingNadInjection, name: "NAD+ Injection", dosage: "20mg/mL" },
  ];

  const treatments = [
    { title: "Hormone Therapy", text: "Peptides, injectables, and oral HRT for treatment plans.", tone: "from-[#55331f]" },
    { title: "Peptides & Longevity", text: "Formulas that support performance, age-management, and recovery.", tone: "from-[#314433]" },
    { title: "Weight Management", text: "Injectable, capsules, and oral GLP-1 support for care plans.", tone: "from-[#4b5338]" },
    { title: "General Health & Wellness", text: "Topical, oral, and injectable support across categories.", tone: "from-[#3e3328]" },
  ];

  const stats = [
    ["30+", "Pharmacies"],
    ["5,000+", "Product SKUs"],
    ["1250+", "Clinics"],
    ["50+", "States"],
  ];

  const heroBottles = [
    { id: "nad", image: landingNadInjection, label: "NAD+ Injection", left: "45px", top: 480, x: 45, y: 255, height: 360, width: 132, baseY: 0, rotate: -14, entranceRotate: -24 },
    { id: "testosterone", image: landingTestosterone, label: "Testosterone Cypionate", left: "392px", top: 455, x: 392, y: 238, height: 350, width: 126, baseY: -20, rotate: 0, entranceRotate: 18 },
    { id: "glutathione", image: landingGlutathione, label: "Glutathione", left: "calc(100% - 520px)", top: 545, x: 760, y: 288, height: 330, width: 122, baseY: 20, rotate: 7, entranceRotate: 24 },
    { id: "tri-mix", image: landingTriMix, label: "TRI-MIX", left: "calc(100% - 335px)", top: 280, x: 1060, y: 150, height: 580, width: 205, baseY: -55, rotate: 1, entranceRotate: 20 },
  ];

  const heroRef = useRef<HTMLElement>(null);
  const heroStageRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const activeBottleRef = useRef<{ id: string; offsetX: number; offsetY: number; lastX: number; lastY: number; lastTime: number } | null>(null);
  const [heroProgress, setHeroProgress] = useState(0);
  const [bottleBodies, setBottleBodies] = useState(() => heroBottles.map((bottle, index) => ({
    id: bottle.id,
    x: bottle.x,
    y: bottle.y - 520 - index * 30,
    vx: (index - 1.5) * 1.2,
    vy: 0,
    rotation: bottle.rotate - 18 + index * 8,
    angularVelocity: (index - 1.5) * 0.8,
  })));
  const bottleProgress = Math.min(0.62, Math.max(0, (heroProgress - 0.08) / 0.78));
  const bottleOpacity = Math.min(1, Math.max(0, (heroProgress - 0.06) / 0.22));
  const bottleLift = 360 - bottleProgress * 580;
  const bottlePlaygroundActive = heroProgress > 0.72;

  useEffect(() => {
    function updateHeroProgress() {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      setHeroProgress(Math.min(1, Math.max(0, -rect.top / scrollable)));
    }

    updateHeroProgress();
    window.addEventListener("scroll", updateHeroProgress, { passive: true });
    window.addEventListener("resize", updateHeroProgress);
    return () => {
      window.removeEventListener("scroll", updateHeroProgress);
      window.removeEventListener("resize", updateHeroProgress);
    };
  }, []);

  useEffect(() => {
    const stage = heroStageRef.current;
    if (!stage || !bottlePlaygroundActive) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    const bounds = stage.getBoundingClientRect();
    setBottleBodies(heroBottles.map((bottle, index) => ({
      id: bottle.id,
      x: Math.min(Math.max(26, bottle.x), Math.max(26, bounds.width - bottle.width - 26)),
      y: -bottle.height - index * 92,
      vx: (index - 1.5) * 1.65,
      vy: 2 + index * 0.55,
      rotation: bottle.rotate + (index - 1.5) * 10,
      angularVelocity: (index - 1.5) * 1.1,
    })));
  }, [bottlePlaygroundActive]);

  useEffect(() => {
    if (!bottlePlaygroundActive) return;

    let lastTime = performance.now();

    function tick(now: number) {
      const stage = heroStageRef.current;
      if (!stage) return;

      const bounds = stage.getBoundingClientRect();
      const delta = Math.min(2.2, (now - lastTime) / 16.67);
      lastTime = now;

      setBottleBodies((currentBodies) => {
        const nextBodies = currentBodies.map((body) => {
          const bottle = heroBottles.find((item) => item.id === body.id);
          if (!bottle || activeBottleRef.current?.id === body.id) return body;

          let x = body.x + body.vx * delta;
          let y = body.y + body.vy * delta;
          let vx = body.vx * 0.998;
          let vy = body.vy + 0.58 * delta;
          let rotation = body.rotation + body.angularVelocity * delta;
          let angularVelocity = body.angularVelocity * 0.996;
          const floor = bounds.height - bottle.height - 22;
          const right = bounds.width - bottle.width - 22;

          if (y > floor) {
            y = floor;
            vy = -Math.abs(vy) * 0.58;
            vx *= 0.9;
            angularVelocity += vx * 0.08;
          }
          if (x < 22) {
            x = 22;
            vx = Math.abs(vx) * 0.72;
            angularVelocity += 1.5;
          }
          if (x > right) {
            x = right;
            vx = -Math.abs(vx) * 0.72;
            angularVelocity -= 1.5;
          }

          return { ...body, x, y, vx, vy, rotation, angularVelocity };
        });

        for (let i = 0; i < nextBodies.length; i += 1) {
          for (let j = i + 1; j < nextBodies.length; j += 1) {
            const firstBottle = heroBottles.find((item) => item.id === nextBodies[i].id);
            const secondBottle = heroBottles.find((item) => item.id === nextBodies[j].id);
            if (!firstBottle || !secondBottle) continue;

            const firstRadius = Math.max(firstBottle.width, firstBottle.height * 0.36) / 2;
            const secondRadius = Math.max(secondBottle.width, secondBottle.height * 0.36) / 2;
            const firstCenterX = nextBodies[i].x + firstBottle.width / 2;
            const firstCenterY = nextBodies[i].y + firstBottle.height / 2;
            const secondCenterX = nextBodies[j].x + secondBottle.width / 2;
            const secondCenterY = nextBodies[j].y + secondBottle.height / 2;
            const dx = secondCenterX - firstCenterX;
            const dy = secondCenterY - firstCenterY;
            const distance = Math.max(1, Math.hypot(dx, dy));
            const minDistance = (firstRadius + secondRadius) * 0.58;

            if (distance < minDistance) {
              const nx = dx / distance;
              const ny = dy / distance;
              const overlap = (minDistance - distance) / 2;
              nextBodies[i] = { ...nextBodies[i], x: nextBodies[i].x - nx * overlap, y: nextBodies[i].y - ny * overlap };
              nextBodies[j] = { ...nextBodies[j], x: nextBodies[j].x + nx * overlap, y: nextBodies[j].y + ny * overlap };

              const firstPush = nextBodies[i].vx * nx + nextBodies[i].vy * ny;
              const secondPush = nextBodies[j].vx * nx + nextBodies[j].vy * ny;
              const impulse = (secondPush - firstPush) * 0.74;
              nextBodies[i] = {
                ...nextBodies[i],
                vx: nextBodies[i].vx + impulse * nx,
                vy: nextBodies[i].vy + impulse * ny,
                angularVelocity: nextBodies[i].angularVelocity - impulse * 0.32,
              };
              nextBodies[j] = {
                ...nextBodies[j],
                vx: nextBodies[j].vx - impulse * nx,
                vy: nextBodies[j].vy - impulse * ny,
                angularVelocity: nextBodies[j].angularVelocity + impulse * 0.32,
              };
            }
          }
        }

        return nextBodies;
      });

      animationFrameRef.current = requestAnimationFrame(tick);
    }

    animationFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [bottlePlaygroundActive]);

  function bottleStyle(bottle: (typeof heroBottles)[number]): CSSProperties {
    const physicsBody = bottleBodies.find((body) => body.id === bottle.id);
    if (bottlePlaygroundActive && physicsBody) {
      return {
        left: 0,
        top: 0,
        height: bottle.height,
        opacity: 1,
        transform: `translate3d(${physicsBody.x}px, ${physicsBody.y}px, 0) rotate(${physicsBody.rotation}deg)`,
        transition: "none",
      };
    }

    const easeIn = Math.min(1, Math.max(0, bottleProgress / 0.45));
    const scale = 0.9 + easeIn * 0.2;
    const activeRotate = bottle.rotate + bottle.entranceRotate * (1 - easeIn);
    return {
      left: bottle.left,
      top: bottle.top,
      height: bottle.height,
      opacity: bottleOpacity,
      transform: `translate3d(0, ${bottleLift + bottle.baseY}px, 0) rotate(${activeRotate}deg) scale(${scale})`,
      transition: "opacity 120ms linear",
    };
  }

  function handleBottlePointerDown(event: ReactPointerEvent<HTMLImageElement>, id: string) {
    if (!bottlePlaygroundActive) return;
    const stage = heroStageRef.current;
    const bottle = heroBottles.find((item) => item.id === id);
    const body = bottleBodies.find((item) => item.id === id);
    if (!stage || !bottle || !body) return;

    const rect = stage.getBoundingClientRect();
    event.currentTarget.setPointerCapture(event.pointerId);
    activeBottleRef.current = {
      id,
      offsetX: event.clientX - rect.left - body.x,
      offsetY: event.clientY - rect.top - body.y,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: performance.now(),
    };
  }

  function handleBottlePointerMove(event: ReactPointerEvent<HTMLImageElement>) {
    const active = activeBottleRef.current;
    const stage = heroStageRef.current;
    if (!active || !stage) return;

    const rect = stage.getBoundingClientRect();
    const bottle = heroBottles.find((item) => item.id === active.id);
    if (!bottle) return;

    const now = performance.now();
    const elapsed = Math.max(16, now - active.lastTime);
    const vx = ((event.clientX - active.lastX) / elapsed) * 16.67;
    const vy = ((event.clientY - active.lastY) / elapsed) * 16.67;
    const x = Math.min(Math.max(22, event.clientX - rect.left - active.offsetX), Math.max(22, rect.width - bottle.width - 22));
    const y = Math.min(Math.max(18, event.clientY - rect.top - active.offsetY), Math.max(18, rect.height - bottle.height - 22));

    activeBottleRef.current = { ...active, lastX: event.clientX, lastY: event.clientY, lastTime: now };
    setBottleBodies((currentBodies) => currentBodies.map((body) => (
      body.id === active.id
        ? { ...body, x, y, vx, vy, angularVelocity: vx * 0.16 }
        : body
    )));
  }

  function handleBottlePointerUp(event: ReactPointerEvent<HTMLImageElement>) {
    if (activeBottleRef.current) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    activeBottleRef.current = null;
  }

  return (
    <main className="min-h-screen bg-white font-['Inter',sans-serif] text-[#183229]">
      <div className="w-full px-5 py-5">
        <section ref={heroRef} className="relative h-[205vh] rounded-[18px]">
          <div ref={heroStageRef} className="sticky top-5 h-[calc(100vh-40px)] min-h-[760px] overflow-hidden rounded-[18px] bg-[#eeeade]">
          <header className="relative z-20 flex items-center justify-between px-10 py-8">
            <button type="button" onClick={onLoginClick} className="flex cursor-pointer items-center gap-2">
              <img src={scriptlinkrxLandingLogo} alt="ScriptLinkRx" className="h-[18px] w-auto object-contain" />
            </button>
            <div className="flex items-center gap-4 text-[14px] font-medium text-[#2a342f]">
              <button
                type="button"
                onClick={onRegisterClick}
                className="cursor-pointer hover:text-[#00a83b]"
              >
                Login
              </button>
              <button
                type="button"
                onClick={onLoginClick}
                className="flex h-[43px] w-[97px] cursor-pointer items-center justify-center gap-2.5 rounded-[32px] bg-white px-5 py-[11px] text-[14px] font-medium text-[#2a342f] shadow-none hover:bg-[#f8f8f8]"
              >
                Register
              </button>
            </div>
          </header>

          <div className="relative z-10 mx-auto mt-[122px] max-w-[820px] text-center">
            <h1 className="text-[64px] font-normal leading-[0.82] tracking-[-0.065em] text-[#1e2522]">
              Scale Your Compounding
              <span className="block text-[#56766c]">Pharmacy Network Through</span>
              <span className="block">One Platform</span>
            </h1>
            <p className="mx-auto mt-[58px] max-w-[430px] text-[28px] font-normal leading-[0.82] tracking-[-0.055em] text-[#1e2522]">
              Simplify compounding, boost your
              <span className="block">offerings, and elevate <span className="text-[#517367]">patient care</span></span>
              <span className="block text-[#517367]">no matter your specialty.</span>
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button type="button" onClick={onLoginClick} className="h-8 cursor-pointer rounded-full bg-white px-5 text-[10px] font-semibold text-[#183229] shadow-sm hover:bg-[#f7f7f4]">See how it works</button>
              <button type="button" onClick={onRequestDemoClick} className="h-8 cursor-pointer rounded-full bg-[#90958b] px-5 text-[10px] font-semibold text-white shadow-sm hover:bg-[#7e8579]">Request a demo</button>
            </div>
          </div>

          {heroBottles.map((bottle) => (
            <img
              key={bottle.id}
              src={bottle.image}
              alt={bottle.label}
              draggable={false}
              onPointerDown={(event) => handleBottlePointerDown(event, bottle.id)}
              onPointerMove={handleBottlePointerMove}
              onPointerUp={handleBottlePointerUp}
              onPointerCancel={handleBottlePointerUp}
              style={bottleStyle(bottle)}
              className={`absolute z-20 w-auto select-none object-contain drop-shadow-[0_20px_24px_rgba(0,0,0,0.13)] will-change-transform ${bottlePlaygroundActive ? "cursor-grab touch-none active:cursor-grabbing" : "pointer-events-none"}`}
            />
          ))}
          <div style={{ opacity: bottleOpacity }} className="absolute right-[260px] top-[480px] flex h-7 w-7 items-center justify-center rounded-full border border-[#dce889] bg-[#f4f8c9] text-[12px] text-[#9ea71d] transition-opacity duration-150">
            <Plus size={13} />
          </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-[1060px] text-center">
          <h2 className="text-[20px] font-medium tracking-[-0.03em] text-[#343936]">Trusted by leading compounding pharmacies</h2>
          <div className="mx-auto mt-8 grid max-w-[850px] grid-cols-4 gap-4">
            {pharmacyLogos.map((logo, index) => (
              <div key={`${logo}-${index}`} className="flex h-[72px] items-center justify-center rounded-[8px] border border-[#e5e5e0] bg-white text-[17px] font-semibold tracking-[-0.04em] text-[#37423d] shadow-[0_8px_22px_rgba(24,50,41,0.04)]">
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-[1180px] text-center">
          <h2 className="text-[21px] font-medium tracking-[-0.03em] text-[#343936]">We've Got You Covered.</h2>
          <div className="mt-9 grid grid-cols-5 gap-5">
            {products.map((product) => (
              <article key={product.name} className="rounded-[8px] border border-[#eeeae3] bg-[#fdfcf9] px-5 py-6 text-left">
                <div className="flex h-[150px] items-center justify-center">
                  <img src={product.image} alt={product.name} className="max-h-[138px] w-auto object-contain" />
                </div>
                <h3 className="mt-4 text-[12px] font-semibold text-[#1f2723]">{product.name}</h3>
                <p className="mt-1 text-[9px] font-medium text-[#9a9f9a]">{product.dosage}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1120px] rounded-[18px] bg-[#fafaf7] px-16 py-16 text-center">
          <h2 className="mx-auto max-w-[420px] text-[22px] font-medium leading-tight tracking-[-0.04em]">
            Watch an order travel from your clinic to your patient's door
          </h2>
          <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-2 overflow-hidden rounded-[4px] bg-white shadow-[0_20px_45px_rgba(24,50,41,0.06)]">
            <div className="flex min-h-[330px] flex-col justify-end bg-[#f7f8f3] p-10 text-left">
              <div className="relative h-[210px]">
                <div className="absolute left-12 top-20 h-24 w-24 rounded-full bg-[#bad1aa]" />
                <div className="absolute left-24 top-8 h-28 w-[90px] rounded-t-full bg-[#e6eadf]" />
                <div className="absolute right-20 top-12 flex h-12 w-12 items-center justify-center rounded-full bg-[#557a56] text-white">
                  <MapPin size={22} />
                </div>
                <div className="absolute left-36 top-20 h-px w-24 rotate-[-22deg] border-t border-dashed border-[#8fa18c]" />
                <div className="absolute left-20 top-28 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5b805f] shadow">
                  <Plus size={18} />
                </div>
              </div>
              <h3 className="text-[16px] font-semibold">Spot the need</h3>
              <p className="mt-2 max-w-[250px] text-[12px] leading-5 text-[#6f7670]">
                A patient needs a custom formula, strength, or delivery method you don't stock. With ScriptLinkRx, you say yes anyway.
              </p>
            </div>
            <div className="min-h-[330px] bg-white p-10 text-left">
              <h3 className="text-[20px] font-semibold tracking-[-0.04em]">Order<br />Status</h3>
              <div className="mt-8 space-y-5">
                {["Order Created", "In Progress", "Shipped", "Delivered"].map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full ${index === 3 ? "bg-[#bde6bc]" : "bg-[#c7d46e]"} text-white`}>
                      <CheckCircle2 size={14} />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-[#24302b]">{step}</p>
                      <p className="text-[9px] text-[#96a09a]">Jun 18 - 1:16 PM</p>
                    </div>
                  </div>
                ))}
                <div className="mt-8 rounded-[16px] bg-[#f3f5e7] p-5">
                  <p className="text-[12px] font-semibold">Live updates</p>
                  <p className="mt-1 text-[10px] text-[#71786f]">Always in the know.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1120px] rounded-[16px] bg-[#fafaf7] p-16">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-10">
            <div className="rounded-[14px] bg-white p-10">
              <p className="text-[11px] font-semibold uppercase text-[#9d7b62]">The old way</p>
              <h3 className="mt-3 text-[30px] font-medium leading-[0.98] tracking-[-0.05em]">Complex. Costly.<br />Hard to Scale.</h3>
              <ul className="mt-8 space-y-3 text-[12px] text-[#5f6862]">
                {["30 Pharmacies", "30 Logins", "30 Workflows", "Multiple Vendors", "High Overhead"].map(item => <li key={item}>x {item}</li>)}
              </ul>
            </div>
            <span className="text-[18px] font-semibold">VS</span>
            <div className="rounded-[14px] bg-white p-10">
              <p className="text-[11px] font-semibold uppercase text-[#64746b]">The ScriptLinkRx Way</p>
              <h3 className="mt-3 text-[30px] font-medium leading-[0.98] tracking-[-0.05em]">Simple. Unified.<br />Built for Growth.</h3>
              <ul className="mt-8 space-y-3 text-[12px] text-[#5f6862]">
                {["30 Pharmacies", "1 Login", "1 Platform", "1 Workflow", "Lower Overhead"].map(item => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1280px] text-center">
          <h2 className="mx-auto max-w-[520px] text-[24px] font-medium leading-tight tracking-[-0.04em]">
            We provide custom compounding solutions for a wide range of specialties
          </h2>
          <div className="mt-10 grid grid-cols-4 gap-5">
            {treatments.map((item) => (
              <article key={item.title} className={`flex h-[360px] flex-col justify-end overflow-hidden rounded-[8px] bg-gradient-to-t ${item.tone} to-[#d5d3c8] p-6 text-left text-white shadow-[0_12px_28px_rgba(24,50,41,0.08)]`}>
                <h3 className="text-[18px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-white/80">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1120px] rounded-[18px] bg-[#fafaf7] p-12">
          <h2 className="text-center text-[23px] font-medium tracking-[-0.04em]">Pharmacy-grade quality, in every formulation your patients need.</h2>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-[8px] bg-[#eef7ef] p-8">
              <h3 className="text-[18px] font-semibold">Why clinics choose us</h3>
              <ul className="mt-7 space-y-4 text-[12px] leading-5 text-[#4f5c56]">
                {["Every ticket built in checkout for parity and freedom from unnecessary extras.", "Ingredients come only from FDA-registered suppliers.", "Easy medication is independently verified through every step.", "A wide range of dosage forms tailored to each patient's treatment plan."].map(item => (
                  <li key={item} className="flex gap-3"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#00a83b]" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-[8px] bg-[#f4ecd7] p-8">
              <h3 className="max-w-[240px] text-[28px] font-medium leading-none tracking-[-0.05em]">Available in multiple formulations</h3>
              <img src={landingNadInjection} alt="" className="absolute bottom-4 right-28 h-[255px] w-auto rotate-[-15deg] object-contain" />
              <img src={landingTestosterone} alt="" className="absolute -right-4 bottom-8 h-[245px] w-auto rotate-[15deg] object-contain" />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1120px]">
          <h2 className="max-w-[260px] text-[22px] font-medium leading-tight tracking-[-0.04em]">Here's what our great customers say</h2>
          <div className="mt-8 grid grid-cols-2 gap-5">
            {["I can now offer precise dermatology prescriptions without sourcing headaches. My patients get exactly what they need.", "ScriptLinkRx cut our turnaround time and boosted client satisfaction with clear workflows and fewer reworks."].map((quote, index) => (
              <article key={quote} className="rounded-[8px] bg-[#f7f8ef] p-8">
                <p className="text-[16px] leading-6 tracking-[-0.03em] text-[#27312d]">{quote}</p>
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-[10px] font-semibold text-[#66706b]">{index === 0 ? "Dr. Michael Chen" : "Sarah Johnson"}</p>
                  <div className="flex gap-1 text-[#77826e]">{Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} size={14} fill="currentColor" />)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1120px] text-center">
          <h2 className="text-left text-[20px] font-medium tracking-[-0.04em]">Certifications Behind Every Partnership</h2>
          <div className="mt-8 flex items-center justify-center gap-16 rounded-[8px] bg-[#f8faf4] py-12 text-[18px] font-semibold text-[#26322d]">
            <span>LegitScript</span>
            <span>PCAB</span>
            <span>NABP</span>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1120px] text-center">
          <h2 className="text-[24px] font-medium leading-tight tracking-[-0.04em]">Proudly Serving<br />Nationwide</h2>
          <div className="relative mx-auto mt-10 h-[410px] max-w-[720px] rounded-[18px] bg-[#eef2e8]">
            <div className="absolute left-12 top-14 h-[290px] w-[500px] rounded-[45%] bg-[#b7c0a6] opacity-80" />
            <div className="absolute left-[340px] top-[120px] rounded-[8px] bg-white p-5 text-left shadow-[0_20px_40px_rgba(24,50,41,0.12)]">
              <p className="text-[13px] font-semibold">Texas</p>
              <p className="mt-1 text-[10px] text-[#8a938e]">5 Pharmacies Active</p>
              <div className="mt-4 space-y-2 text-[10px] text-[#435047]">
                {["DCA Pharmacy", "Optimal Balance Pharmacy", "Thesis Pharmacy", "Precision Compounding Pharmacy"].map(item => <p key={item}>{item}</p>)}
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-3">
            {stats.map(([number, label]) => (
              <div key={label} className="rounded-[8px] border border-[#ededed] bg-white p-8 text-left">
                <p className="text-[48px] font-semibold tracking-[-0.06em] text-[#1f2723]">{number}</p>
                <p className="mt-4 text-[11px] font-medium text-[#9a9f9a]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1430px] overflow-hidden rounded-[26px] bg-[#8a5a28] px-6 py-14 text-center text-white">
          <div className="mx-auto max-w-[760px] rounded-[18px] bg-black/20 px-8 py-12 backdrop-blur-sm">
            <h2 className="text-[42px] font-medium leading-none tracking-[-0.05em]">Ready to Simplify Pharmacy Fulfillment?</h2>
            <p className="mx-auto mt-5 max-w-[430px] text-[12px] leading-5 text-white/80">Discover how ScriptLinkRx can help your clinic streamline operations and expand treatment offerings.</p>
            <div className="mt-8 flex justify-center gap-3">
              <button type="button" onClick={onRequestDemoClick} className="h-10 cursor-pointer rounded-full bg-white px-6 text-[12px] font-semibold text-[#183229]">Request Demo</button>
              <button type="button" onClick={onLoginClick} className="h-10 cursor-pointer rounded-full bg-[#1d1d1a] px-6 text-[12px] font-semibold text-white">Talk to Sales</button>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-6 overflow-hidden rounded-[20px] bg-[#050609] px-10 pb-10 pt-16 text-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 text-[11px] text-white/55">
            <p>Trusted compounding, patient care, efficiency, and access under one modern ordering platform.</p>
            <div>
              <p className="mb-4 font-semibold text-white">Company</p>
              <p>Blog Management</p>
              <p>About Us</p>
              <button type="button" onClick={onContactClick} className="cursor-pointer text-left transition-colors hover:text-white">Contact</button>
            </div>
            <div><p className="mb-4 font-semibold text-white">Info</p><p>Mission</p><p>Request a demo</p><p>View Catalog</p></div>
            <div><p className="mb-4 font-semibold text-white">Menu</p><p>Privacy Policy</p><p>Terms</p></div>
          </div>
          <h2 className="mt-28 w-fit cursor-pointer text-[96px] font-semibold tracking-[-0.07em] text-white/20 transition-colors duration-300 hover:text-white">
            Scriptlinkrx
          </h2>
        </footer>
      </div>
    </main>
  );
}

// ─── App Shell ────────────────────────────────────────────────────────────────

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [authView, setAuthView] = useState<"landing" | "login" | "organization" | "register" | "single-sign-on" | "request-demo" | "contact">("landing");
  const [appTheme, setAppTheme] = useState<AppTheme>(() => {
    const savedTheme = window.localStorage.getItem("scriptlinkrx-theme");
    return savedTheme === "orange" ? "orange" : "default";
  });
  const [extraVariants, setExtraVariants] = useState(() => window.localStorage.getItem("scriptlinkrx-extra-variants") === "true");
  const [oldCatalog, setOldCatalog] = useState(() => window.localStorage.getItem("scriptlinkrx-old-catalog") === "true");
  const [pharmacyCatalog, setPharmacyCatalog] = useState(() => window.localStorage.getItem("scriptlinkrx-pharmacy-catalog") === "true");
  const [page, setPage] = useState<Page>(DEFAULT_PAGE);
  const [cartMode, setCartMode] = useState<CartMode>("single");
  const [multiCartPatientIds, setMultiCartPatientIds] = useState<number[]>([]);
  const [patientCartEntries, setPatientCartEntries] = useState<PatientCartEntry[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<CardDef>(POPULAR_CARDS[0]);
  const mainScrollRef = useRef<HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<typeof ORDERS[number]>(ORDERS[0]);
  const [favoriteProductIds, setFavoriteProductIds] = useState<Set<number>>(
    () => new Set(ALL_CARDS.filter((card) => card.heartVariant === "green").map((card) => card.id)),
  );
  const favoriteProducts = useMemo(
    () => ALL_CARDS.filter((card) => favoriteProductIds.has(card.id)),
    [favoriteProductIds],
  );
  const cartPage: Page = "cart-multi";
  const [cartPreviewItems, setCartPreviewItems] = useState<CartPreviewItem[]>([]);
  const [appLoading, setAppLoading] = useState(false);
  const [appToast, setAppToast] = useState<{ id: number; type: "success" | "error"; message: string } | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMenuOpen, setChatMenuOpen] = useState(false);
  const [chatMuted, setChatMuted] = useState(false);
  const [showChatTutorial, setShowChatTutorial] = useState(
    () => window.localStorage.getItem("scriptlinkrx-chat-tutorial-seen") !== "true",
  );
  const [showPlatformTour, setShowPlatformTour] = useState(false);
  const [platformTourStep, setPlatformTourStep] = useState(0);
  const [platformTourTooltipVisible, setPlatformTourTooltipVisible] = useState(false);
  const [chatInput, setChatInput] = useState("");

  useLayoutEffect(() => {
    if (page !== "product-detail") return;
    const scroller = mainScrollRef.current;
    if (!scroller) return;
    scroller.scrollTop = 0;
    scroller.scrollLeft = 0;
    window.scrollTo(0, 0);
  }, [page, selectedProduct.id]);
  const [alexTyping, setAlexTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ id: number; sender: "alex" | "user"; text: string }>>([
    { id: 1, sender: "alex", text: "Hi! I’m Alex. How can I help with your pharmacy or product order today?" },
  ]);

  useEffect(() => {
    window.localStorage.setItem("scriptlinkrx-authenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    window.localStorage.setItem("scriptlinkrx-theme", appTheme);
  }, [appTheme]);

  useEffect(() => {
    window.localStorage.setItem("scriptlinkrx-extra-variants", String(extraVariants));
  }, [extraVariants]);

  useEffect(() => {
    window.localStorage.setItem("scriptlinkrx-old-catalog", String(oldCatalog));
  }, [oldCatalog]);

  useEffect(() => {
    window.localStorage.setItem("scriptlinkrx-pharmacy-catalog", String(pharmacyCatalog));
  }, [pharmacyCatalog]);

  useEffect(() => {
    if (!chatOpen) return;
    window.requestAnimationFrame(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }, [chatMessages, alexTyping, chatOpen]);

  function getAlexReply(message: string) {
    const question = message.toLowerCase().replace(/[^a-z0-9\s-]/g, " ");
    const includesAny = (...terms: string[]) => terms.some((term) => question.includes(term));

    if (includesAny("thank", "thanks", "thx")) {
      return "You’re welcome! If you need anything else, I can help with products, patients, prescriptions, shipping, or order tracking.";
    }
    if (includesAny("hello", "hi ", "hey", "good morning", "good afternoon") || question.trim() === "hi") {
      return "Hi! How can I help?";
    }
    if (includesAny("multi shipping", "multi shiping", "multiple shipping", "multiple shiping", "multi-shipping", "multiple patient", "multi patient")) {
      if (includesAny("where", "find", "which pharmacy", "which pharmacies")) {
        return "Open Catalog and check the pharmacy options beside the search bar. Pharmacies that support it have a green “Multi-shipping” badge. Hover over the badge for details; pharmacies without the badge charge shipping per patient.";
      }
      return "Multi-shipping lets one supported pharmacy ship prescriptions for several patients with one shipping fee for that pharmacy cart. Look for the green Multi-shipping badge in Catalog.";
    }
    if (includesAny("where to find product", "where to find a product", "where can i find product", "where can i find a product", "how can i find product", "find a product", "find product", "search product", "look for product")) {
      return "Open Catalog from the left menu, then use the search field near the top. You can search by product name and use the pharmacy filter to narrow the results.";
    }
    if (includesAny("how to order", "how do i order", "how can i order", "place an order", "order a product", "buy a product", "how to buy")) {
      return "Open Catalog → choose a product → select its size, strength, and pharmacy → choose one or more patients → select Add to cart. In Cart, complete each prescription, choose shipping, then continue to checkout.";
    }
    if (includesAny("best product", "best products", "which product", "recommend product", "recommendation")) {
      return "There isn’t one best product for every patient. The right option depends on the treatment goal, medical history, and prescriber’s decision. You can browse Catalog and compare formulations and pharmacies, but confirm the clinical choice with the prescriber.";
    }
    if (includesAny("shipping", "delivery", "arrive", "how long")) {
      return "Delivery depends on the pharmacy and shipping method you select. Most orders are processed within one business day, then arrive in about 1–3 business days. Your cart shows the exact method and fee before checkout.";
    }
    if (includesAny("tracking", "track", "where is my order", "order status")) {
      return "Open Orders and select the order to see its live status and tracking. If it says “Tracking Not Ready,” the pharmacy hasn’t created the shipping label yet.";
    }
    if (includesAny("semaglutide", "tirzepatide", "pt-141", "bremelanotide", "available", "availability", "injectable")) {
      return "Availability can vary by product strength, size, and pharmacy. Open the product in Catalog, choose its options, and the available pharmacy choices and prices will update there.";
    }
    if (includesAny("price", "cost", "how much", "cheapest")) {
      return "The price changes with the product configuration and pharmacy. Choose the size and strength on the product page to compare options; the cart will show the final product price plus shipping.";
    }
    if (includesAny("prescription", "prescriber", "open rx", " rx ", "doctor")) {
      return "Prescription details are completed for each patient in the cart. The assigned prescriber and prescription status are also shown in Order Details after the order is created.";
    }
    if (includesAny("patient", "address", "add person")) {
      return "Choose a patient on the product page, or create a new one from the patient menu. You can add several patients, set a quantity for each, and review every patient’s address in the cart.";
    }
    if (includesAny("cancel", "refund", "return")) {
      return "Open the order in Orders and use Request Cancellation. If the pharmacy has already started processing it, create a support ticket so the team can review the available options.";
    }
    if (includesAny("support", "human", "agent", "ticket", "someone")) {
      return "You can open Support Tickets from the left menu. You can also use the three-dot menu here and choose Support tickets to contact the team.";
    }
    if (includesAny("pharmacy", "pharmacies")) {
      return "Catalog lets you filter across all six pharmacies. Each product page shows available pharmacy prices, and pharmacies that combine shipping for multiple patients have a Multi-shipping badge.";
    }
    if (includesAny("cart", "checkout", "add to cart")) {
      return "After choosing a pharmacy and at least one patient, add the product to the cart. Items are grouped by pharmacy, with each patient’s quantity, price, prescription fields, address, and shipping option shown together.";
    }

    return "I’m not completely sure what you mean yet. Could you tell me whether this is about a product, patient, prescription, pharmacy, shipping, or an existing order?";
  }

  function sendChatMessage(event: FormEvent) {
    event.preventDefault();
    const message = chatInput.trim();
    if (!message) return;
    setChatMessages(current => [...current, { id: Date.now(), sender: "user", text: message }]);
    setChatInput("");
    setAlexTyping(true);
    window.setTimeout(() => {
      setChatMessages(current => [...current, {
        id: Date.now() + 1,
        sender: "alex",
        text: getAlexReply(message),
      }]);
      setAlexTyping(false);
    }, 900);
  }

  function dismissChatTutorial() {
    setShowChatTutorial(false);
    window.localStorage.setItem("scriptlinkrx-chat-tutorial-seen", "true");
  }

  function startChatWelcome() {
    setChatMessages([]);
    setChatOpen(true);
    setAlexTyping(true);
    window.setTimeout(() => {
      setChatMessages(current => [...current, { id: Date.now(), sender: "alex", text: "Hi! I’m Alex. How can I help with your pharmacy or product order today?" }]);
      setAlexTyping(false);
    }, 1100);
  }

  function finishPlatformTour() {
    window.localStorage.setItem("scriptlinkrx-platform-tour-seen", "true");
    setShowPlatformTour(false);
    setPlatformTourTooltipVisible(false);
    setPlatformTourStep(0);
    startChatWelcome();
  }

  const cartItemCount = cartPreviewItems.reduce((count, item) => count + (item.qty ?? 1), 0);

  function addCartItems(count = 1, product?: CartPreviewItem) {
    if (product) {
      setCartPreviewItems((current) => {
        const existingIndex = current.findIndex((item) => item.id === product.id);
        if (existingIndex === -1) {
          return [{ ...product, qty: product.qty ?? count }, ...current].slice(0, 4);
        }
        const next = [...current];
        const existing = next[existingIndex];
        next.splice(existingIndex, 1);
        return [{ ...existing, ...product, qty: (existing.qty ?? 1) + (product.qty ?? count) }, ...next].slice(0, 4);
      });
    }
  }

  function updateCartItemQty(id: number, delta: number) {
    setCartPreviewItems((current) =>
      current
        .map((item) => item.id === id ? { ...item, qty: Math.max(0, (item.qty ?? 1) + delta) } : item)
        .filter((item) => (item.qty ?? 1) > 0),
    );
  }

  function removeCartItem(id: number) {
    setCartPreviewItems((current) => current.filter((item) => item.id !== id));
  }

  function clearCartItems() {
    setCartPreviewItems([]);
    setPatientCartEntries([]);
    setMultiCartPatientIds([]);
  }

  function addToPatientCart(entries: PatientCartEntry[]) {
    setPatientCartEntries(current => [...current, ...entries]);
    setMultiCartPatientIds(current => [...new Set([...current, ...entries.map(entry => entry.patientId)])]);
  }

  function runWithAppLoader(action: () => void, delayMs = 500) {
    if (appLoading) return;
    setAppLoading(true);
    window.setTimeout(() => {
      try {
        action();
      } catch {
        showToast("Failed to update", "error");
      } finally {
        setAppLoading(false);
      }
    }, delayMs);
  }

  function showToast(message: string, type: "success" | "error" = "success") {
    const id = Date.now();
    setAppToast({ id, type, message });
    window.setTimeout(() => {
      setAppToast((current) => current?.id === id ? null : current);
    }, 4200);
  }

  function renderPage() {
    switch (page) {
      case "dashboard":
        return <DashboardPage onNavigate={setPage} />;
      case "products":
        return (
          <ProductsPage
            onNavigate={setPage}
            cartMode={cartMode}
            setCartMode={setCartMode}
            onProductSelect={setSelectedProduct}
            oldCatalog={oldCatalog}
            pharmacyCatalog={pharmacyCatalog}
          />
        );
      case "favorites":
        return <FavoritesPage onNavigate={setPage} cartPage={cartPage} onProductSelect={setSelectedProduct} />;
      case "product-detail":
        return <ProductDetailPage onNavigate={setPage} cartMode={cartMode} setCartMode={setCartMode} onAddToPatientCart={addToPatientCart} product={selectedProduct} extraVariants={extraVariants} />;
      case "pharmacies":
        return <PharmaciesPage onNavigate={setPage} />;
      case "orders":
        return <OrdersPage onNavigate={setPage} onOrderSelect={(order) => { setSelectedOrder(order); setPage("order-detail"); }} extraVariants={extraVariants} />;
      case "order-detail":
        return <OrderDetailPage order={selectedOrder} onNavigate={setPage} />;
      case "support":
        return <SupportPage onNavigate={setPage} />;
      case "users":
        return <UsersPage onNavigate={setPage} />;
      case "settings":
        return <SettingsPage onNavigate={setPage} />;
      case "cart-single":
        return <MultiPatientCartPage onNavigate={setPage} cartMode={cartMode} setCartMode={setCartMode} selectedPatientIds={multiCartPatientIds} cartEntries={patientCartEntries} extraVariants={extraVariants} />;
      case "cart-multi":
        return <MultiPatientCartPage onNavigate={setPage} cartMode={cartMode} setCartMode={setCartMode} selectedPatientIds={multiCartPatientIds} cartEntries={patientCartEntries} extraVariants={extraVariants} />;
      case "checkout-prescription":
        return <CheckoutPrescriptionPage onNavigate={setPage} />;
      default:
        return (
          <ProductsPage
            onNavigate={setPage}
            cartMode={cartMode}
            setCartMode={setCartMode}
            onProductSelect={setSelectedProduct}
            oldCatalog={oldCatalog}
            pharmacyCatalog={pharmacyCatalog}
          />
        );
    }
  }

  if (!isAuthenticated) {
    if (authView === "login") {
      return (
        <LoginPage
          onRegister={() => setAuthView("register")}
          onSingleSignOn={() => setAuthView("single-sign-on")}
          onLogin={() => {
            setAuthView("organization");
          }}
        />
      );
    }

    if (authView === "organization") {
      return (
        <OrganizationSetupPage
          onCreate={() => {
            setIsAuthenticated(true);
            setPlatformTourStep(0);
            setPage("products");
            setShowPlatformTour(false);
            setPlatformTourTooltipVisible(false);
          }}
        />
      );
    }

    if (authView === "single-sign-on") {
      return <SingleSignOnPage onBackToLogin={() => setAuthView("login")} />;
    }

    if (authView === "register") {
      return <RegisterPage onBackToLogin={() => setAuthView("login")} />;
    }

    if (authView === "request-demo") {
      return <RequestDemoPage onBackToLanding={() => setAuthView("landing")} onLoginClick={() => setAuthView("login")} />;
    }

    if (authView === "contact") {
      return <ContactPage onBackToLanding={() => setAuthView("landing")} />;
    }

    return <LandingPage onLoginClick={() => setAuthView("login")} onRegisterClick={() => setAuthView("register")} onRequestDemoClick={() => setAuthView("request-demo")} onContactClick={() => setAuthView("contact")} />;
  }

  const platformTourSteps = [
    {
      icon: <BookOpen size={23} />,
      title: "Catalog",
      description: "Browse and search all available products, then compare configurations, pharmacy prices, and availability.",
      hint: "This is where every new product order begins.",
      card: "left-[260px] top-[145px]",
      arrow: "-left-2 top-7",
    },
    {
      icon: <ClipboardList size={23} />,
      title: "Orders",
      description: "Review submitted orders and follow approval, payment, pharmacy processing, tracking, and delivery.",
      hint: "Open an order to see its full details and patient tracking link.",
      card: "left-[260px] top-[182px]",
      arrow: "-left-2 top-7",
    },
    {
      icon: <ShoppingCart size={23} />,
      title: "Cart",
      description: "Review products by patient and pharmacy, complete prescription fields, and choose shipping before checkout.",
      hint: "Continue becomes available when all required information is complete.",
      card: "left-[260px] top-[219px]",
      arrow: "-left-2 top-7",
    },
    {
      icon: <Truck size={23} />,
      title: "Multi-shipping pharmacies",
      description: "In Catalog, supported pharmacies display a green Multi-shipping badge in the pharmacy filter row.",
      hint: "It means one shipping fee can cover prescriptions for multiple patients from that pharmacy.",
      card: "left-[310px] top-[245px]",
      arrow: "left-10 -top-2",
    },
  ];
  const activeTourStep = platformTourSteps[platformTourStep];

  return (
    <AppLoadingContext.Provider value={{ runWithAppLoader, showToast }}>
      <CartSummaryContext.Provider value={{ cartItemCount, cartPreviewItems, addCartItems, updateCartItemQty, removeCartItem, clearCartItems }}>
        <ProductFavoritesContext.Provider value={{ favoriteProductIds, setFavoriteProductIds, favoriteProducts }}>
          <div className={`app-theme app-theme-${appTheme} flex h-screen overflow-hidden bg-[var(--app-soft-hover)] font-['Inter',sans-serif]`}>
            {/* Sidebar Navigation */}
            <Sidebar
              active={page}
              onNavigate={setPage}
              cartPage={cartPage}
              onLogout={() => {
                setAuthView("login");
                setIsAuthenticated(false);
                setChatOpen(false);
                setChatMenuOpen(false);
              }}
              appTheme={appTheme}
              setAppTheme={setAppTheme}
              extraVariants={extraVariants}
              setExtraVariants={setExtraVariants}
              oldCatalog={oldCatalog}
              setOldCatalog={setOldCatalog}
              pharmacyCatalog={pharmacyCatalog}
              setPharmacyCatalog={setPharmacyCatalog}
            />

            {/* Main content area */}
            <main ref={mainScrollRef} className="app-main-scroll h-screen min-w-0 flex-1 overflow-y-scroll p-3 pl-1.5">
              <div className="bg-card rounded-[10px] min-h-full p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                {renderPage()}
              </div>
            </main>

            {showPlatformTour && platformTourTooltipVisible && (
                <div className={`chat-welcome-in fixed z-[82] w-[330px] rounded-[18px] bg-[#171717] p-5 text-white shadow-[0_22px_65px_rgba(0,0,0,0.32)] ${activeTourStep.card}`}>
                  <span className={`absolute size-4 rotate-45 bg-[#171717] ${activeTourStep.arrow}`} aria-hidden="true" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#dff2a8] text-[#064b2f]">{activeTourStep.icon}</div>
                    <button onClick={finishPlatformTour} className="rounded-full px-2.5 py-1.5 text-[11px] text-white/55 hover:bg-white/10 hover:text-white">End tips</button>
                  </div>
                  <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#b9d879]">Quick tip</p>
                  <h2 className="relative mt-1.5 text-[18px] font-semibold leading-[24px]">{activeTourStep.title}</h2>
                  <p className="relative mt-2 text-[12px] leading-[18px] text-white/70">{activeTourStep.description}</p>
                  <div className="relative mt-4 rounded-[11px] bg-white/[0.08] px-3 py-2.5 text-[11px] leading-[16px] text-white/65">{activeTourStep.hint}</div>
                  <div className="relative mt-5 flex items-center gap-2">
                    <div className="flex flex-1 gap-1.5">{platformTourSteps.map((_, index) => <span key={index} className={`h-1.5 rounded-full transition-all ${index === platformTourStep ? "w-6 bg-[#d8ffa2]" : index < platformTourStep ? "w-2.5 bg-white/40" : "w-2.5 bg-white/20"}`} />)}</div>
                    <button onClick={() => {
                      if (platformTourStep === platformTourSteps.length - 1) finishPlatformTour();
                      else setPlatformTourStep(step => step + 1);
                    }} className="h-9 rounded-[9px] bg-[#d8ffa2] px-4 text-[11px] font-semibold text-[#123422] hover:bg-[#c9ef96]">{platformTourStep === platformTourSteps.length - 1 ? "Finish" : "Next"}</button>
                  </div>
                </div>
            )}

            {/* Chat popup */}
            {chatOpen && (
              <div className="chat-welcome-in fixed bottom-[76px] right-5 z-50 flex h-[430px] w-[385px] flex-col overflow-hidden rounded-[21px] bg-white shadow-[0_20px_55px_rgba(5,60,35,0.24)]">
                <div className="flex h-[101px] items-center bg-[#004b2d] px-[35px] pb-[15px] pt-[14px] text-white">
                  <div className="flex size-[34px] items-center justify-center overflow-hidden rounded-full bg-[#f0b33a] text-[18px]">👨🏾</div>
                  <div className="ml-[11px]">
                    <p className="text-[14px] font-medium leading-tight">Alex Rivera</p>
                    <p className="mt-[2px] text-[12px] leading-tight text-white/70">Online</p>
                  </div>
                  <button onClick={() => setChatMenuOpen(current => !current)} className="ml-auto flex size-8 items-center justify-center text-[24px] leading-none text-white" aria-expanded={chatMenuOpen} aria-label="Chat options">⋮</button>
                </div>
                {chatMenuOpen && (
                  <div className="absolute right-4 top-[62px] z-20 w-[205px] overflow-hidden rounded-[10px] border border-[#dfe5e2] bg-white p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                    <button onClick={() => { setChatMuted(current => !current); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><Bell size={14} /> {chatMuted ? "Unmute notifications" : "Mute notifications"}</button>
                    <button onClick={() => { setChatMessages([{ id: Date.now(), sender: "alex", text: "Hi! I’m Alex. How can I help with your pharmacy or product order today?" }]); setChatInput(""); setAlexTyping(false); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><RefreshCw size={14} /> New conversation</button>
                    <button onClick={() => { setPage("support"); setChatOpen(false); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><MessageSquare size={14} /> Support tickets</button>
                    <div className="my-1 h-px bg-[#e8ece9]" />
                    <button onClick={() => { setChatOpen(false); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><X size={14} /> Close chat</button>
                  </div>
                )}
                <div className="relative -mt-[15px] flex min-h-0 flex-1 flex-col rounded-t-[21px] bg-white">
                  <div className="flex-1 space-y-4 overflow-y-auto px-[19px] pb-4 pt-[31px]">
                    {chatMessages.map(message => message.sender === "alex" ? (
                      <div key={message.id} className="flex items-start gap-[12px]">
                        <div className="flex size-[23px] shrink-0 items-center justify-center rounded-full bg-[#f0b33a] text-[11px]">👨🏾</div>
                        <div className="w-fit max-w-[278px] rounded-[20px] bg-[#eaf2bd] px-[15px] py-[13px] text-[13px] leading-[16px] text-[#111]">{message.text}</div>
                      </div>
                    ) : (
                      <div key={message.id} className="ml-auto w-fit max-w-[275px] rounded-[20px] bg-black px-[15px] py-[13px] text-[13px] leading-[16px] text-white">{message.text}</div>
                    ))}
                    {alexTyping && <div className="flex items-center gap-[12px]"><div className="flex size-[23px] shrink-0 items-center justify-center rounded-full bg-[#f0b33a] text-[11px]">👨🏾</div><div className="flex gap-1 rounded-[16px] bg-[#eaf2bd] px-4 py-3"><span className="size-1.5 animate-pulse rounded-full bg-[#60712d]" /><span className="size-1.5 animate-pulse rounded-full bg-[#60712d] [animation-delay:150ms]" /><span className="size-1.5 animate-pulse rounded-full bg-[#60712d] [animation-delay:300ms]" /></div></div>}
                    <div ref={chatEndRef} aria-hidden="true" />
                  </div>
                  <form onSubmit={sendChatMessage} className="flex items-center gap-2 border-t border-[#e9ecea] bg-white px-4 py-3">
                    <input value={chatInput} onChange={event => setChatInput(event.target.value)} placeholder="Write a message..." className="h-10 min-w-0 flex-1 rounded-full border border-[#dce2df] bg-[#f7f9f8] px-4 text-[12px] outline-none placeholder:text-[#929b96] focus:border-[#004b2d]" />
                    <button type="submit" disabled={!chatInput.trim()} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#004b2d] text-white transition-colors hover:bg-[#063c27] disabled:cursor-not-allowed disabled:bg-[#b8c4be]" aria-label="Send message"><ArrowUpRight size={16} /></button>
                  </form>
                </div>
              </div>
            )}

            {/* Chat bubble */}
            <div className="fixed bottom-5 right-5 z-50">
              {showChatTutorial && !chatOpen && (
                <div className="chat-welcome-in absolute bottom-[60px] right-0 w-[310px] rounded-[18px] bg-[#171717] p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <span className="absolute -bottom-2 right-[14px] size-4 rotate-45 bg-[#171717]" aria-hidden="true" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[14px] font-semibold">Meet Alex, your assistant</p>
                      <p className="mt-1 text-[11px] leading-[16px] text-white/65">Ask questions and get help while you work.</p>
                    </div>
                    <button onClick={dismissChatTutorial} className="flex size-7 shrink-0 items-center justify-center rounded-full text-white/65 hover:bg-white/10 hover:text-white" aria-label="Dismiss chat tutorial"><X size={14} /></button>
                  </div>
                  <div className="relative mt-3 rounded-[13px] bg-[#eaf2bd] p-3 text-[#142218]">
                    <div className="flex items-center gap-2 text-[11px] font-semibold"><MessageSquare size={13} /> Ask Alex about:</div>
                    <p className="mt-2 text-[11px] leading-[16px] text-[#435047]">Finding products, placing orders, multi-shipping, prescriptions, delivery, and tracking.</p>
                  </div>
                  <button onClick={() => { dismissChatTutorial(); setChatOpen(true); }} className="relative mt-3 h-10 w-full rounded-[10px] bg-[#2f2f2f] text-[12px] font-semibold text-white transition-colors hover:bg-[#3a3a3a]">Try the chat</button>
                </div>
              )}
              <button onClick={() => {
                if (chatOpen) setChatOpen(false);
                else { dismissChatTutorial(); setChatOpen(true); }
              }} className="w-11 h-11 bg-[#053c23] rounded-full flex items-center justify-center shadow-lg hover:bg-[#183229] transition-colors" aria-expanded={chatOpen} aria-label={chatOpen ? "Close chat" : "Open chat"}>
                <MessageSquare size={16} className="text-[#d8ffa2]" />
              </button>
            </div>
          </div>
          <AppActionOverlay active={appLoading} />
          <AppToast toast={appToast} onClose={() => setAppToast(null)} />
        </ProductFavoritesContext.Provider>
      </CartSummaryContext.Provider>
    </AppLoadingContext.Provider>
  );
}
