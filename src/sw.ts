/// <reference lib="webworker" />
export {};

declare const self: ServiceWorkerGlobalScope;

interface PushPayload {
  title: string;
  body: string;
  icon?: string;
  url?: string;
  tag?: string;
}

self.addEventListener("push", (event: PushEvent) => {
  let data: PushPayload = { title: "إشعار", body: "" };

  try {
    if (event.data) {
      data = event.data.json();
    }
  } catch {
    data = { title: "إشعار جديد", body: event.data?.text() || "" };
  }

  const options: NotificationOptions = {
    body: data.body,
    icon: data.icon || "/icon-192.png",
    badge: "/badge-72.png",
    tag: data.tag || "default",
    data: { url: data.url || "/" },
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  const targetUrl = (event.notification.data?.url as string) || "/";

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && "focus" in client) {
            return (client as WindowClient).focus();
          }
        }
        return self.clients.openWindow(targetUrl);
      }),
  );
});

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(self.clients.claim());
});
