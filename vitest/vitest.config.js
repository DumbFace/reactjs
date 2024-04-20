// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Cấu hình mức độ ồn ào
    verbose: true,

    // Cấu hình bộ xử lý tệp
    fileProcessors: ["esnext"],

    // Cấu hình bộ xử lý mô phỏng
    mockProcessors: ["jest"],

    // Cấu hình bộ xử lý tùy chỉnh
    customProcessors: {
      // ... mã logic tùy chỉnh của bạn ...
    },
  },
});
