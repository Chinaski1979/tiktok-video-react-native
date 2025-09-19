import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Video as VideoType } from '../data/videos';

interface VideoCardProps {
  video: VideoType;
  onLike: (videoId: string) => void;
  isActive: boolean;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const VideoCard: React.FC<VideoCardProps> = ({ video, onLike, isActive }) => {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likeAnimation] = useState(new Animated.Value(1));

  const handleLike = () => {
    onLike(video.id);
    
    // Heart animation
    Animated.sequence([
      Animated.timing(likeAnimation, {
        toValue: 1.5,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(likeAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.videoContainer} 
        activeOpacity={1}
        onPress={togglePlayPause}
      >
        <Video
          ref={videoRef}
          style={styles.video}
          source={{ uri: video.url }}
          resizeMode={ResizeMode.COVER}
          shouldPlay={isActive}
          isLooping
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded) {
              setIsPlaying(status.isPlaying);
            }
          }}
        />
        
        {/* Video Overlay */}
        <View style={styles.overlay}>
          {/* Right side actions */}
          <View style={styles.rightActions}>
            <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
              <Animated.Text 
                style={[
                  styles.actionIcon,
                  { transform: [{ scale: likeAnimation }] }
                ]}
              >
                {video.isLiked ? '❤️' : '🤍'}
              </Animated.Text>
              <Text style={styles.actionText}>{video.likes}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>💬</Text>
              <Text style={styles.actionText}>42</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📤</Text>
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      
      {/* Video Info */}
      <View style={styles.videoInfo}>
        <Text style={styles.author}>{video.author}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.description}>{video.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  rightActions: {
    position: 'absolute',
    right: 15,
    bottom: 100,
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  videoInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 80,
    padding: 15,
    paddingBottom: 30,
  },
  author: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9,
  },
});
