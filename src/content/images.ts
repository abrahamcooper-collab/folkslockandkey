/**
 * Every photo the site uses, by key. Pages reference images by key, so changing a photo is an edit
 * to this file only.
 *
 * All photos are the client's own job photos, stored under
 * /public/images/<service-folder>/ (resized to 2000px and stripped of EXIF/GPS data; the full-size
 * originals are kept out of the deploy in /client-photos-original).
 */
type Photo = { readonly src: string; readonly alt: string };

const photo = (path: string, alt: string): Photo => ({ src: `/images/${path}`, alt });

export const images = {
  /** Home/index hero, CTA band background and schema image. */
  hero: photo(
    "mobile-shop/mobile-locksmith-van-rekey-station.jpg",
    "Folks Lock & Key mobile locksmith van with its rekeying station, lock cylinders and tools ready on site",
  ),

  // Mobile shop
  vanWorkbench: photo(
    "mobile-shop/mobile-locksmith-van-workbench.jpg",
    "Folks Lock & Key mobile locksmith van with its rekeying workbench and pinning kit open",
  ),
  vanRekeyStation: photo(
    "mobile-shop/mobile-locksmith-van-rekey-station.jpg",
    "Rekeying station in the back of the mobile locksmith van, with lock cylinders and tools laid out",
  ),

  // Lock rekeying
  rekeyTwentyLocks: photo(
    "lock-rekeying/rekeying-20-locks-to-one-key-vallejo.jpg",
    "A locksmith rekeying 20 lock cylinders to one key on the van workbench in Vallejo",
  ),
  pinningCylinder: photo(
    "lock-rekeying/pinning-lock-cylinder-vallejo.jpg",
    "A locksmith's hands loading new pins into a lock cylinder during a rekey in Vallejo",
  ),
  rekeyedSecurityDoor: photo(
    "lock-rekeying/rekeyed-security-door-locks-vallejo.jpg",
    "Rekeyed locks on an entry door and steel security screen door in Vallejo",
  ),
  rekeyedKnobDeadbolt: photo(
    "lock-rekeying/rekeyed-knob-and-deadbolt-vallejo.jpg",
    "A door with its knob and deadbolt cylinders being rekeyed in Vallejo",
  ),

  // Lock installation
  smartkeyHandleset: photo(
    "lock-installation/kwikset-smartkey-handleset-vallejo.jpg",
    "New Kwikset SmartKey handleset and deadbolt installed on a black front door in Vallejo",
  ),
  doorPrep: photo(
    "lock-installation/door-prep-for-new-lock-vallejo.jpg",
    "A locksmith preparing a door bore hole for a new lock installation in Vallejo",
  ),
  satinDeadboltKnob: photo(
    "lock-installation/satin-nickel-deadbolt-and-knob-vallejo.jpg",
    "Satin nickel deadbolt and matching doorknob installed on a door in Vallejo",
  ),
  kwiksetDeadboltKnob: photo(
    "lock-installation/kwikset-deadbolt-and-knob-vallejo.jpg",
    "Kwikset deadbolt and keyed knob installed on an exterior door in Vallejo",
  ),
  deadboltBorePrep: photo(
    "lock-installation/deadbolt-bore-prep-fairfield.jpg",
    "A freshly bored door ready for a new deadbolt in a gated Fairfield community",
  ),
  brassDeadboltFairfield: photo(
    "lock-installation/brass-deadbolt-installed-fairfield.jpg",
    "A new polished brass deadbolt and knob installed on a door in Fairfield",
  ),
  deadboltKnobFairfield: photo(
    "lock-installation/new-deadbolt-and-knob-fairfield.jpg",
    "A new deadbolt and doorknob installed on a white panel door in Fairfield",
  ),
  brassDeadboltKeys: photo(
    "lock-installation/brass-deadbolt-and-knob-with-keys.jpg",
    "A brass deadbolt and doorknob on a green front door with the new keys in the lock",
  ),
  deadboltDoorknobReplacement: photo(
    "lock-installation/new-deadbolt-and-doorknob-replacement.jpg",
    "A replacement deadbolt and doorknob installed on a green front door",
  ),
  doorknobInstalled: photo(
    "lock-installation/new-doorknob-installed.jpg",
    "A new satin nickel doorknob installed on a white interior door",
  ),
  leverDeadboltInstall: photo(
    "lock-installation/lever-and-deadbolt-installation.jpg",
    "A lever handle and deadbolt installed on a residential door, shown open and closed",
  ),
  bronzeLeverDeadbolt: photo(
    "lock-installation/bronze-lever-and-deadbolt.jpg",
    "An oil-rubbed bronze lever handle and deadbolt on a white front door",
  ),
  doubleDoorHandlesets: photo(
    "lock-installation/double-entry-door-handlesets-vallejo.jpg",
    "New satin nickel handlesets and deadbolts installed on wood and glass double entry doors in Vallejo",
  ),
  doubleDoorLevers: photo(
    "lock-installation/double-entry-door-levers-vallejo.jpg",
    "Matching lever handles and deadbolts on the interior side of double entry doors in Vallejo",
  ),

  // Electronic locks
  schlageEncode: photo(
    "electronic-lock-installation/schlage-encode-smart-deadbolt.jpg",
    "A Schlage Encode keypad smart deadbolt installed above a brass knob on a front door",
  ),
  keypadLever: photo(
    "electronic-lock-installation/keypad-lever-lock.jpg",
    "A Schlage keypad lever lock installed on a red door",
  ),

  // Lock repair
  slidingDoorRepair: photo(
    "lock-repair/sliding-glass-door-lock-repair-vallejo.jpg",
    "Sliding glass door lock mechanism being repaired in Vallejo",
  ),
  slidingDoorHandle: photo(
    "lock-repair/sliding-glass-door-handle-repair-vallejo.jpg",
    "A repaired sliding glass door handle and latch in Vallejo",
  ),
  commercialDeadboltRepair: photo(
    "lock-repair/commercial-deadbolt-repair-benicia.jpg",
    "A repaired commercial deadbolt with an open/closed indicator on a storefront door in Benicia",
  ),
  storefrontLatchRepair: photo(
    "lock-repair/storefront-door-latch-repair-benicia.jpg",
    "Storefront door latch and pull handle after a commercial lock repair in Benicia",
  ),
  storefrontLockTested: photo(
    "lock-repair/storefront-lock-tested-with-keys-benicia.jpg",
    "A storefront lock tested with the business's keys after repair in Benicia",
  ),
  storefrontLatchCheck: photo(
    "lock-repair/storefront-lock-latch-check-benicia.jpg",
    "A locksmith checking the latch on a repaired storefront lock in Benicia",
  ),
  brokenKeyInCylinder: photo(
    "lock-repair/broken-key-in-cylinder-san-pablo.jpg",
    "A key snapped off inside a commercial door lock cylinder in San Pablo",
  ),
  brokenKeyExtracted: photo(
    "lock-repair/broken-key-extracted-san-pablo.jpg",
    "A broken key piece extracted from a door lock cylinder in San Pablo",
  ),

  // Commercial
  commercialDoublePulls: photo(
    "commercial-locksmith/commercial-double-door-pulls.jpg",
    "Commercial pull handles and key cylinders installed on red double doors",
  ),
  commercialLeverDeadbolt: photo(
    "commercial-locksmith/commercial-lever-and-deadbolt.jpg",
    "A commercial lever lock and deadbolt installed on a red business door",
  ),
  storefrontLever: photo(
    "commercial-locksmith/storefront-door-lever-hardware.jpg",
    "Bronze storefront lever hardware on an aluminum and glass commercial door",
  ),
  storefrontLeverInstalled: photo(
    "commercial-locksmith/storefront-door-lever-installed.jpg",
    "A newly installed lever handle on a glass storefront door",
  ),
  storefrontCylinderKey: photo(
    "commercial-locksmith/storefront-door-cylinder-with-key.jpg",
    "A storefront door lock cylinder with the new key in place",
  ),
  coinLaundryLock: photo(
    "commercial-locksmith/coin-laundry-machine-lock.jpg",
    "A coin-operated laundry machine lock box serviced by a commercial locksmith",
  ),
  interchangeableCore: photo(
    "commercial-locksmith/interchangeable-core-cylinder.jpg",
    "A small-format interchangeable core lock cylinder used in master key systems",
  ),

  // Key duplication
  antiqueKey: photo(
    "key-duplication/antique-cabinet-skeleton-key.jpg",
    "A brass skeleton key in an antique wooden cabinet lock",
  ),

  // Automotive
  carIgnition: photo(
    "automotive-locksmith/vintage-car-ignition-lock.jpg",
    "An ignition and dashboard lock on a classic vehicle being serviced by an automotive locksmith",
  ),

  // Mailbox locks
  residentialMailbox: photo(
    "mailbox-locks/residential-mailbox-lock.jpg",
    "A residential curbside mailbox with a new lock installed",
  ),
  clusterMailboxService: photo(
    "mailbox-locks/cluster-mailbox-lock-service.jpg",
    "A cluster mailbox unit opened for lock service",
  ),
  clusterMailboxUnits: photo(
    "mailbox-locks/cluster-mailbox-units.jpg",
    "Cluster mailbox units at an apartment community",
  ),
  pedestalMailbox: photo(
    "mailbox-locks/pedestal-mailbox-lock.jpg",
    "A pedestal U.S. Mail box before a lock replacement",
  ),
  pedestalMailboxNewLock: photo(
    "mailbox-locks/pedestal-mailbox-new-lock.jpg",
    "A pedestal mailbox with a newly replaced lock",
  ),
  clusterMailboxClosed: photo(
    "mailbox-locks/cluster-mailbox-unit-closed.jpg",
    "A cluster box unit with individual tenant mailbox locks",
  ),
  clusterMailboxOpen: photo(
    "mailbox-locks/cluster-mailbox-unit-open.jpg",
    "A cluster box unit opened for mailbox lock rekeying",
  ),
  oasisMailbox: photo(
    "mailbox-locks/oasis-mailbox-lock-replacement-benicia.jpg",
    "An Oasis-style mailbox during a lock replacement in Benicia",
  ),
  oasisMailboxNewLock: photo(
    "mailbox-locks/oasis-mailbox-new-lock-benicia.jpg",
    "An Oasis-style mailbox with its new lock and keys in Benicia",
  ),
} as const satisfies Record<string, Photo>;

export type ImageKey = keyof typeof images;
