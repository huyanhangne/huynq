import React, { useState, useRef } from 'react';
import { ThemeMode, Language } from '../types';
import { AVATAR_PRESETS, PROFILE_INFO } from '../data/profileData';
import { 
  Camera, 
  Upload, 
  Link as LinkIcon, 
  Check, 
  X, 
  RefreshCw, 
  Sparkles,
  UserCheck,
  Image as ImageIcon
} from 'lucide-react';

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onSaveAvatar: (newUrl: string) => void;
  theme: ThemeMode;
  lang: Language;
}

export const AvatarModal: React.FC<AvatarModalProps> = ({
  isOpen,
  onClose,
  currentAvatar,
  onSaveAvatar,
  theme,
  lang,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(currentAvatar);
  const [urlInput, setUrlInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'presets' | 'upload' | 'url'>('presets');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [previewError, setPreviewError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const isDark = theme === 'dark';

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      alert(lang === 'vi' ? 'Vui lòng chọn tệp hình ảnh (PNG, JPG, WebP)!' : 'Please select an image file!');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setSelectedAvatar(result);
        setPreviewError(false);
      }
      setIsUploading(false);
    };
    reader.onerror = () => {
      setIsUploading(false);
      alert(lang === 'vi' ? 'Không thể đọc tệp hình ảnh.' : 'Failed to read image file.');
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setSelectedAvatar(urlInput.trim());
    setPreviewError(false);
  };

  const handleSave = () => {
    onSaveAvatar(selectedAvatar);
    onClose();
  };

  const handleResetDefault = () => {
    setSelectedAvatar(PROFILE_INFO.defaultAvatar);
    setPreviewError(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-lg rounded-xl border shadow-2xl overflow-hidden transition-all ${
          isDark ? 'bg-[#0a1018] border-white/10 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div
          className={`p-4 sm:p-5 border-b flex items-center justify-between ${
            isDark ? 'bg-[#05070a] border-white/10' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">
                {lang === 'vi' ? 'Ảnh Đại Diện Giảng Viên' : 'Lecturer Profile Avatar'}
              </h3>
              <p className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {PROFILE_INFO.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-sm border transition-all cursor-pointer ${
              isDark
                ? 'border-white/10 hover:bg-white/10 text-slate-400 hover:text-white'
                : 'border-slate-300 hover:bg-slate-100 text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Avatar Live Preview */}
          <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-lg border bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-transparent border-blue-500/20">
            <div className="relative group shrink-0">
              <div className="w-24 h-24 rounded-xl p-[2px] bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 shadow-xl overflow-hidden">
                <img
                  src={selectedAvatar}
                  alt={PROFILE_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={() => setPreviewError(true)}
                  className="w-full h-full object-cover rounded-[10px] bg-slate-800"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#0a1018] flex items-center justify-center text-xs text-white shadow-md">
                ✓
              </span>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <div className="font-bold text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2">
                <span>{PROFILE_INFO.name}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  M.Sc.
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {lang === 'vi'
                  ? 'Ảnh đại diện sẽ hiển thị đồng bộ trên Trang chủ, Hồ sơ cá nhân, Academic CV và Trợ lý AI.'
                  : 'Avatar updates across Hero, About section, Academic CV, and the AI Assistant.'}
              </p>
              {previewError && (
                <p className="text-xs text-rose-400 font-mono">
                  {lang === 'vi' ? '⚠️ Không thể tải ảnh từ liên kết này' : '⚠️ Unable to load image from URL'}
                </p>
              )}
            </div>
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center justify-center border-b pb-2 gap-2">
            <button
              onClick={() => setActiveTab('presets')}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'presets'
                  ? 'bg-blue-600 text-white'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'vi' ? 'Bộ sưu tập mẫu' : 'Curated Styles'}
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'upload'
                  ? 'bg-blue-600 text-white'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'vi' ? 'Tải ảnh từ máy' : 'Upload Photo'}
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'url'
                  ? 'bg-blue-600 text-white'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'vi' ? 'Nhập link ảnh' : 'Image URL'}
            </button>
          </div>

          {/* Tab 1: Presets */}
          {activeTab === 'presets' && (
            <div className="space-y-3">
              <label className={`text-xs font-mono uppercase tracking-wider block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {lang === 'vi' ? 'Chọn phong cách học thuật phù hợp:' : 'Select academic portrait style:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {AVATAR_PRESETS.map((preset) => {
                  const isSelected = selectedAvatar === preset.url;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedAvatar(preset.url);
                        setPreviewError(false);
                      }}
                      className={`group relative p-2 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500/10 ring-2 ring-blue-500/40'
                          : isDark
                          ? 'border-white/10 bg-white/5 hover:border-white/20'
                          : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="aspect-square rounded-md overflow-hidden mb-2 bg-slate-900">
                        <img
                          src={preset.url}
                          alt={preset.nameVi}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="font-semibold text-xs truncate">
                        {lang === 'vi' ? preset.nameVi : preset.nameEn}
                      </div>
                      <div className={`text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {lang === 'vi' ? preset.descVi : preset.descEn}
                      </div>
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] shadow-md">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 2: Upload File */}
          {activeTab === 'upload' && (
            <div className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`p-8 rounded-lg border-2 border-dashed text-center cursor-pointer transition-all ${
                  isDark
                    ? 'border-white/20 bg-white/5 hover:border-blue-500 hover:bg-blue-500/5'
                    : 'border-slate-300 bg-slate-50 hover:border-blue-500 hover:bg-blue-50'
                }`}
              >
                <Upload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-bold text-sm">
                  {lang === 'vi' ? 'Bấm vào đây để chọn ảnh chân dung' : 'Click to select portrait photo'}
                </h4>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi'
                    ? 'Hỗ trợ PNG, JPG, JPEG, WebP từ điện thoại hoặc máy tính'
                    : 'Supports PNG, JPG, JPEG, WebP from your device'}
                </p>
                {isUploading && (
                  <p className="text-xs text-blue-400 mt-2 animate-pulse">
                    {lang === 'vi' ? 'Đang xử lý hình ảnh...' : 'Processing image...'}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Tab 3: Image URL */}
          {activeTab === 'url' && (
            <div className="space-y-3">
              <label className={`text-xs font-mono uppercase tracking-wider block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {lang === 'vi' ? 'Dán đường dẫn ảnh đại diện (URL):' : 'Paste Direct Image URL:'}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/my-photo.jpg"
                  className={`flex-1 px-3.5 py-2.5 rounded-sm text-xs border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-[#05070a] border-white/10 text-white placeholder-slate-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  disabled={!urlInput.trim()}
                  className="px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white cursor-pointer"
                >
                  {lang === 'vi' ? 'Thử Ảnh' : 'Preview'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div
          className={`p-4 border-t flex items-center justify-between gap-3 ${
            isDark ? 'bg-[#05070a] border-white/10' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <button
            onClick={handleResetDefault}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-sm text-xs font-mono transition-all cursor-pointer ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Khôi phục mặc định' : 'Reset Default'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                isDark
                  ? 'border-white/10 hover:bg-white/10 text-slate-300'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
            >
              {lang === 'vi' ? 'Đóng' : 'Cancel'}
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-md cursor-pointer active:scale-95 transition-all"
            >
              <Check className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Áp Dụng Avatar' : 'Save Avatar'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
