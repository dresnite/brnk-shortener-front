"use client";

import { RootState } from "@/src/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LinksTableEntry from "./LinksTableEntry";
import useUpdateSessionLinks from "@/src/hooks/useUpdateSessionLinks";

export interface Link {
  id: number;
  url: string;
  short_code: string;
  visit_count: number;
}

export default function LinksTable() {
  const session = useSelector((state: RootState) => state.session);
  const updateSessionLinks = useUpdateSessionLinks();

  const [tableLinks, setTableLinks] = useState<Link[]>([]);

  useEffect(() => {
    updateSessionLinks();
  }, []);

  useEffect(() => {
    setTableLinks(session.links ?? []);
  }, [session.links]);

  return (
    <div className="mb-10 flex justify-center text-sm">
      <table className="mx-20 w-full">
        <thead className="bg-veryDarkBlue">
          {tableLinks.length == 0 ? (
            <tr className="text-left">
              <th className="px-6 py-5">Links</th>
            </tr>
          ) : (
            <tr className="text-left">
              <th className="px-6 py-5">Short Link</th>
              <th>Original Link</th>
              <th>Visits</th>
            </tr>
          )}
        </thead>

        <tbody>
          {tableLinks.length == 0 && (
            <tr className="px-6 py-5 flex items-center">
              <td>
                {
                  "Looks like you don't have any links yet... Why don't you short your first link?"
                }
              </td>
            </tr>
          )}
          {session.username &&
            tableLinks.map((link: Link) => (
              <LinksTableEntry
                originalUrl={link.url}
                shortUrlPath={link.short_code}
                visitCount={link.visit_count}
                key={link.id}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
