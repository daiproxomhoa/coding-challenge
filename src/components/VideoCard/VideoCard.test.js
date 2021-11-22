import { render } from "@testing-library/react";
import { describe } from "jest-circus";
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import VideoCard from "./index";

describe("Video Card", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Content", async () => {
    const fakeData = {
      kind: "youtube#videoListResponse",
      etag: "hkciWZE5Uvdzn8HSsI4WlCkaL6Y",
      items: [
        {
          kind: "youtube#video",
          etag: "LhRcuNO7e6iyJDJDOP6q6tfFxW8",
          id: "6Qac2hCXmlY",
          snippet: {
            publishedAt: "2021-11-09T10:00:12Z",
            channelId: "UCcI89ISi6bLmeiUUdYVd65Q",
            title:
              "♪ Nhạc Lofi TikTok - Cưa Là Đổ, Yêu Là Cưới, Cafe Không Đường | Nhạc Lofi Hay Nhất Hiện Nay 2021",
            description:
              "♪ Nhạc Lofi TikTok - Cưa Là Đổ, Yêu Là Cưới, Cafe Không Đường | Nhạc Lofi Hay Nhất Hiện Nay 2021\n\n► Đăng ký xem thêm: https://bit.ly/3rx8Vvl\n► Tổng hợp những bản cover hay nhất: https://bit.ly/3BDurDg\n\n✉ Khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: lxmusic2021@gmail.com\n\n-----------------------------------------\n♬Tracklist:\n00:00 Cưa Là Đổ\n03:52 Yêu Là Cưới\n06:59 Cafe Không Đường\n11:50 Thiên Tình Sầu\n15:17 Tình Yêu Ngủ Quên\n18:25 Ông Trời Làm Tội Anh Chưa\n23:29 Mất Nhau Yên Bình\n26:58 Thiệp Hồng Người Dưng\n30:44 Hạnh Phúc Bỏ Rơi Em\n35:29 Chắc Gì Anh Yêu Cô Ấy\n40:18 Khuê Mộc Lang\n44:29 Trắc Trở\n48:30 Nếu Có Kiếp Sau\n53:28 Răng Khôn\n56:58 Ngân Lang\n1:00:55 Sầu Hồng Gai\n1:05:03 Người Còn Thương Ta\n1:10:46 Cô Thắm Không Về\n1:14:50 Sầu Tương Tư\n1:18:27 Yêu Ai Để Không Phải Khóc\n\n#LXlofi #nhaclofi #lofichill2021\n---------------\n© Bản quyền Video thuộc về LX Music\n© Copyright by LX Music  ☞ Do not Reup",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/6Qac2hCXmlY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/6Qac2hCXmlY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/6Qac2hCXmlY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/6Qac2hCXmlY/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/6Qac2hCXmlY/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "LX Lofi",
            tags: [
              "nhạc lofi",
              "LX Lofi",
              "chill buồn",
              "nhạc ballad lofi 2021",
              "nhạc lofi việt buồn",
              "nhạc lofi 2021",
              "nhạc lofi hay nhất 2021",
              "tuyển tập nhạc lofi 2021",
              "nhạc lofi chill hay nhất 2021",
              "nhạc lofi chill",
              "lofi",
              "lofi việt",
              "nhạc lofi việt",
              "cưa là đổ lofi",
              "cưa là đổ phát hồ",
              "cưa là đổ tiktok",
              "cưa là đổ x2x",
              "cưa là đổ remix",
              "cưa là đổ cover",
              "cua la do lofi",
              "yêu là cưới lofi",
              "yêu là cưới cover",
              "yêu là cưới tiktok",
              "yeu la cuoi lofi",
              "cafe không đường lofi",
              "cafe không đường tiktok",
            ],
            categoryId: "10",
            liveBroadcastContent: "none",
            localized: {
              title:
                "♪ Nhạc Lofi TikTok - Cưa Là Đổ, Yêu Là Cưới, Cafe Không Đường | Nhạc Lofi Hay Nhất Hiện Nay 2021",
              description:
                "♪ Nhạc Lofi TikTok - Cưa Là Đổ, Yêu Là Cưới, Cafe Không Đường | Nhạc Lofi Hay Nhất Hiện Nay 2021\n\n► Đăng ký xem thêm: https://bit.ly/3rx8Vvl\n► Tổng hợp những bản cover hay nhất: https://bit.ly/3BDurDg\n\n✉ Khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: lxmusic2021@gmail.com\n\n-----------------------------------------\n♬Tracklist:\n00:00 Cưa Là Đổ\n03:52 Yêu Là Cưới\n06:59 Cafe Không Đường\n11:50 Thiên Tình Sầu\n15:17 Tình Yêu Ngủ Quên\n18:25 Ông Trời Làm Tội Anh Chưa\n23:29 Mất Nhau Yên Bình\n26:58 Thiệp Hồng Người Dưng\n30:44 Hạnh Phúc Bỏ Rơi Em\n35:29 Chắc Gì Anh Yêu Cô Ấy\n40:18 Khuê Mộc Lang\n44:29 Trắc Trở\n48:30 Nếu Có Kiếp Sau\n53:28 Răng Khôn\n56:58 Ngân Lang\n1:00:55 Sầu Hồng Gai\n1:05:03 Người Còn Thương Ta\n1:10:46 Cô Thắm Không Về\n1:14:50 Sầu Tương Tư\n1:18:27 Yêu Ai Để Không Phải Khóc\n\n#LXlofi #nhaclofi #lofichill2021\n---------------\n© Bản quyền Video thuộc về LX Music\n© Copyright by LX Music  ☞ Do not Reup",
            },
          },
          statistics: {
            viewCount: "135283",
            likeCount: "2992",
            dislikeCount: "61",
            favoriteCount: "0",
            commentCount: "66",
          },
        },
      ],
      pageInfo: {
        totalResults: 1,
        resultsPerPage: 1,
      },
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
      })
    );

    await act(async () => {
      render(
        <VideoCard
          info={{
            author: "admin",
            url: "https://www.youtube.com/watch?v=6Qac2hCXmlY",
          }}
        />,
        container
      );
    });
    expect(container.querySelector("#title-video")?.textContent).toBe(
      fakeData.snippet?.title
    );
    global.fetch.mockRestore();
  });
});
